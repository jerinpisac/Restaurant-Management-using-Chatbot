const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if ( !name || !email || !message || !subject) {
    return res.status(400).json({ error: "Email and message are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.VITE_USER,
        pass: process.env.VITE_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.VITE_USER,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});
const PORT = process.env.VITE_PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
