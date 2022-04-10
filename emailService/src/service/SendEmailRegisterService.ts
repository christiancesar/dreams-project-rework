import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { Transporter } from 'nodemailer';
import path from 'path';

export default new class SendEmailRegisterService {
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
  async execute(): Promise<void> {
    
    const registerUserTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'register_user.hbs',
    );

    const templateFileContent = await fs.promises.readFile(registerUserTemplate, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContent);

    const variables = {
          appWebUrl: process.env.APP_WEB_URL || 'http://localhost:3000',
          firstName: 'Christian Cesar',
          linkResend: `${process.env.APP_API_URL}/users/send-mail-register?userId=${'edc6c251-6e36-4f63-8a6d-cc50dbd86e3c'}`,
          linkConfirm: `${process.env.APP_WEB_URL}/confirm-email?token=${'9174a43c-4770-4666-bed6-8c734386a21b'}?userId=${'edc6c251-6e36-4f63-8a6d-cc50dbd86e3c'}`,
    }

    const html = parseTemplate(variables);

    const message = await this.client.sendMail({
      from: {
        name: 'Christian Cesar | Dreams',
        address: 'dreams@copyrights.tech',
      },
      to: {
        name: 'Christian Cesar',
        address: 'christiancnp@gmail.com',
      },
      subject: 'Bem-vindo ao Dreams',
      html
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}