import nodemailer from 'nodemailer';

export async function sendEmail(to,name, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.REACT_APP_EMAIL_USERNAME,
      pass: process.env.REACT_APP_EMAIL_PASSWORD,
    },
  });

  text = `Merhaba ${name} geri bildiriminiz için Teşekkür Ederim! \n\n${text}`;

  const mailOptions = {
    from: process.env.REACT_APP_EMAIL_USERNAME,
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi:', info.response);
    return true;
  } catch (error) {
    console.error('E-posta gönderilirken hata oluştu:', error);
    return false;
  }
}
