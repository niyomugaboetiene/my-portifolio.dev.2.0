import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

app.use(cors({
  origin: 'https://niyomugaboetiene.vercel.app', 
  methods: ['POST', 'GET'],
}));

app.use(express.json());

// Email endpoint
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 10000,
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to send message.");
  }
});

// test route
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend API is running",
    endpoints: {
      sendEmail: "POST /send"
    }
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});