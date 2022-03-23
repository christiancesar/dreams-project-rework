import nodemailer, { Transporter } from 'nodemailer';
import ISendMailDTO from '../dtos/ISendMailDTO';
import { Handlebars } from './handlebars';

export class EtherealMailProvider {
  private client: Transporter;
  private handlebarsProvider: Handlebars;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });

    this.handlebarsProvider = new Handlebars()
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
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
      html: await this.handlebarsProvider.parse(templateData),
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}