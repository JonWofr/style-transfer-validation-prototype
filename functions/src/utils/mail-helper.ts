import * as nodemailer from 'nodemailer';
import * as functions from 'firebase-functions';

const nodemailerConfig = {
  host: functions.config().nodemailer.host,
  port: parseInt(functions.config().nodemailer.port),
  secure: false,
  auth: {
    user: functions.config().nodemailer.username,
    pass: functions.config().nodemailer.password,
  },
};
const transporter = nodemailer.createTransport(nodemailerConfig);

export const sendMail = async (
  recipient: string,
  subject: string,
  html: string
) => {
  const mailOptions = {
    from: `"${functions.config().nodemailer.display_name}" <${
      functions.config().nodemailer.username
    }>`,
    to: recipient,
    subject,
    html,
  };
  const info = await transporter.sendMail(mailOptions);
  console.info(info);
};
