import nodemailer from 'nodemailer';
import env from '../../dotenv';

const sendEmail = (req, email, token) => {
  const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: env.admin_email,
      pass: env.admin_password } });

  const emailToSend = {
    from: env.admin_email,
    to: email,
    subject: 'Reset password',
    html: `
    You are receiving this because you (or someone else) have requested the reset of the password for your account.
    Please click on the following link, or paste this into your browser to complete the process:
    <a href="http://${req.headers.host}/resetPassword/${token}">link to reset</a>
    If you did not request this, please ignore this email and your password will remain unchanged.
    ` };

  transport.sendMail(emailToSend, (err, info) => {
    if (err) {
      return { error: err };
    }
    return { message: 'Email sent with success', information: info };
  });
};

export default sendEmail;
