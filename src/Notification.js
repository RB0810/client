
import formData from 'form-data';

class Notification {
  constructor() {}

  sendMail(emailContent) {
    const { to, subject, text } = emailContent;
    const message = {
      from: 'Excited User <>',
      to: to,
      subject: subject,
      text: text,
    };

    client.messages
      .create(DOMAIN, message)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export default Notification;
