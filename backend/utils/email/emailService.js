
import sendViaBrevo from "./brevoProvider.js";

const sendMail = async ({ to, subject, html }) => {
  return sendViaBrevo({ to, subject, html });
};

export default sendMail;
