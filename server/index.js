const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
 // Load environment variables

// Debug logs to confirm .env variables are loaded
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS ? '✅ Loaded' : '❌ Missing');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
console.log("Loaded env:", process.env);

// Welcome email route
app.post('/send-welcome', async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).send('Email is required');

  // Extract name from email
  const namePart = email.split('@')[0];
  const name = namePart
    .replace(/[0-9]/g, '')             // remove numbers
    .replace(/[^a-zA-Z]/g, '')         // remove special characters
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize first letter

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Welcome to Pepperwahl 🎉',
      html: `
        <p>Hi <b>${name}</b>,</p>
        <p>Thanks for signing up with <b>Pepperwahl</b>! We're thrilled to have you on board.</p>
        <p>Our team will contact you shortly to understand your goals and help you get started.</p>
        <p>You can also book a meeting with us directly using the link below:</p>
        <p><a href="https://calendly.com/kumar-s-pepeleads/30min" target="_blank">📅 Schedule a 30-minute meeting</a></p>
        <p>Looking forward to working with you!</p>
        <br />
        <p>Best regards,<br /><b>Team Pepperwahl</b></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent');
  } catch (err) {
    console.error('❌ Error sending email:', err);
    res.status(500).send('Email failed');
  }
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
