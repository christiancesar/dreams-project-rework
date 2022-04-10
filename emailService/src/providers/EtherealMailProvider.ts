import nodemailer, { Transporter } from 'nodemailer';
import ISendMailDTO from '../dtos/ISendMailDTO';
import handlebars from 'handlebars';
import fs from 'fs';

class EtherealMailProvider {
  private client: Transporter;
    
    constructor() {
        nodemailer.createTestAccount().then(account => {
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                }
            });
            this.client = transporter;
        })
    }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {

    const templateFileContent = await fs.promises.readFile(templateData.file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContent);
    const html = parseTemplate(templateData.variables);
    
    const message = await this.client.sendMail({
      from: {
        name: from?.name || 'Christian Cesar | Dreams',
        address: from?.address || 'dreams@copyrights.tech',
      },
      to: {
        name: to.name,
        address: to.address,
      },
      subject,
      html
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default new EtherealMailProvider();