import axios from "axios";

const sendViaBrevo = async ({ to, subject, html }) => {
    console.log("Sending email via Brevo...");

  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: process.env.BREVO_SENDER_NAME,
          email:process.env.BREVO_SENDER_EMAIL,
        },
        to: [{ email: to }],
        subject,
        htmlContent: html,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Brevo email sent to:", to);
  } catch (err) {
    console.error(
      "Brevo email error:",
      err.response?.data || err.message
    );
    throw err;
  }
};

export default sendViaBrevo;
