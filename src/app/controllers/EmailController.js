import nodemailer from'nodemailer';
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'doandan301@gmail.com',
    pass: 'sops hsts jtxj qwqf',
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});
export default transporter;
