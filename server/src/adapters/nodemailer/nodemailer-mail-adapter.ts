import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "dc3b9dbd52e312",
        pass: "17b2f2612c9171"     
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({subject, body} : SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Rodrigo Franco Bruno <rfrancobruno@yahoo.com>',
            subject,
            html: body,
        });
    }
}