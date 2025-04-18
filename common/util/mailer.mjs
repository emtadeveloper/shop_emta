import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const generateHtmlTemplate = (subject, bodyText) => {
  return `
    <div style="font-family: 'Tahoma', sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      <div style="background-color: #007bff; color: white; padding: 20px; text-align: center;">
        <h2>${subject}</h2>
      </div>
      <div style="padding: 30px; color: #333; font-size: 15px; line-height: 1.6;">
        ${bodyText}
      </div>
      <div style="background-color: #f1f1f1; padding: 20px; text-align: center; font-size: 13px; color: #777;">
      </div>
    </div>
  `;
};

const sendMail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: `"EMTA Shop" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: generateHtmlTemplate(subject, text),
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw new Error("Email could not be sent");
  }
};

export default sendMail;
