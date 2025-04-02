/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Import the required packages
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create an Express app
const app = express();

// Use body-parser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});
// Endpoint to receive email, subject, and data and send an email
app.post("/send-email", async (req, res) => {
  const { email, subject, fullName, phoneNumber, message } = req.body;

  // Validate the request body
  if (!email || !subject || !fullName || !phoneNumber || !message) {
    return res.status(400).send("Email, subject, and data are required.");
  }

  try {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nassangavanessa2@gmail.com", // Your Gmail address
        pass: process.env.password, // Your Gmail password (or app-specific password)
      },
    });

    // Setup email data
    let mailOptions = {
      from: `"${fullName}" <${email}>`,
      to: "nassangavanessa2@gmail.com", // List of receivers
      subject: subject, // Subject line
      text: message, // Plain text body
      html: `<p>${message}</p>`, // HTML body
    };

    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Email sent successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email.");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
