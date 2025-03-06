const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'upload');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {
    recursive: true,
  });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abdulmajid1m2@gmail.com',
    pass: 'cekpalvvmiqcxvje',
  },
});

async function sendCongratulatoryEmail(
  firstName,
  lastName,
  middleName,
  birthDate,
  email,
  phoneNumber,
  aboutYou,
  jobTitle
) {
  try {
    const mailOptions = {
      from: 'abdulmajid1m2@gmail.com',
      to: email,
      subject: 'Your Email Submitted Successfully',
      text: 'Thank you for applying. We have received your application and will review it shortly.',
      html: `
      <html>
        <head>
          <style>
           body {
                  font-family: Arial, sans-serif;
                  background-color: #7571e672 ;
                  margin: 0;
                  padding: 0;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
              }

              .container {
                  background-color: #333;
                  color: white;
                  padding: 20px;
                  border-radius: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  max-width: 600px;
                  width: 100%;
                  text-align: start;
              }

              h1 {
                  color: #a40d8d;
                  font-size: 24px;
              }

              ul {
                  text-align: left;
                  margin: 20px 0;
              }

              ul li {
                  margin-bottom: 10px;
              }

              footer {
                  font-size: 12px;
                  color: #888;
                  margin-top: 20px;
              }
              .heading{
                color: #7571e6;
              }
              p{
                color: white;
              }
          </style>
        </head>
        <body>
              <div class="container">
                <h1 class="heading">Your Application Submitted Successfully!</h1>
                <p>Dear <strong>${firstName} ${lastName}</strong></p>
                <p>Congratulations! Your application for the ${jobTitle} position has been successfully submitted.</p>
                <p>We've received your application and want to express our gratitude for considering a career opportunity with us. Your interest in joining our team is greatly appreciated.</p>
                <p>Here's what's happening next:</p>
                <ul>
                    <li><strong>Application Review:</strong> Our hiring team will carefully review your application to assess your qualifications and fit for the role.</li>
                    <li><strong>Communication:</strong> We'll keep you updated throughout the hiring process. If your qualifications match our needs, we'll reach out to schedule an interview or discuss next steps.</li>
                    <li><strong>Stay Connected:</strong> In the meantime, feel free to explore more about DevEntia Consulting and the work we do. Follow us for news and updates.</li>
                </ul>
                <footer>
                    <p>You're receiving this email because you contacted us.</p>
                    <p>DevEntia © 2024. All Rights Reserved.</p>
                </footer>
            </div>
        </body>

      </html>
    `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Congratulatory email sent: %s', info.messageId);
    return info;
  } catch (error) {
    throw new Error(`Error sending congratulatory email: ${error.message}`);
  }
}

async function sendEmail(
  firstName,
  lastName,
  middleName,
  birthDate,
  email,
  phoneNumber,
  aboutYou,
  jobTitle,
  filePath
) {
  // reply(email)
  try {
    const mailOptions = {
      from: 'abdulmajid1m2@gmail.com',
      to: 'abdulmajid1m2@gmail.com',
      subject: 'Job Application',
      text: aboutYou,
      html: `
                <p><strong>Full Name:</strong> ${firstName} ${middleName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p><strong>Birth Date:</strong> ${birthDate}</p>
                <p><strong>Job Title:</strong> ${jobTitle}</p>
                <p><strong>About You:</strong> ${aboutYou}</p>
            `,
    };

    if (filePath) {
      mailOptions.attachments = [
        {
          filename: path.basename(filePath),
          path: filePath,
        },
      ];
    }

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
}

const applyJob = async (req, res) => {
  upload.single('file')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({
        message: 'Error uploading file',
        error: err.toString(),
      });
    }

    const {
      firstName,
      lastName,
      middleName,
      birthDate,
      email,
      phoneNumber,
      aboutYou,
      jobTitle,
    } = req.body;
    const file = req.file;

    const trimmedData = {
      firstName: firstName ? firstName.trim() : '',
      lastName: lastName ? lastName.trim() : '',
      middleName: middleName ? middleName.trim() : '',
      birthDate: birthDate ? birthDate.trim() : '',
      email: email ? email.trim() : '',
      phoneNumber: phoneNumber ? phoneNumber.trim() : '',
      aboutYou: aboutYou ? aboutYou.trim() : '',
      jobTitle: jobTitle ? jobTitle.trim() : '',
    };

    if (
      !trimmedData.firstName ||
      !trimmedData.lastName ||
      !trimmedData.middleName ||
      !trimmedData.birthDate ||
      !trimmedData.email ||
      !trimmedData.phoneNumber ||
      !trimmedData.aboutYou
    ) {
      return res.status(400).json({
        message: 'All fields are required.',
      });
    }

    try {
      const filePath = file ? path.resolve(uploadDir, file.filename) : '';
      console.log('File Path:', filePath);
      const fileExists = fs.existsSync(filePath);
      console.log('Does the file exist?', fileExists);

      if (!fileExists) {
        throw new Error('File does not exist at path: ' + filePath);
      }

      const info = await sendEmail(
        trimmedData.firstName,
        trimmedData.lastName,
        trimmedData.middleName,
        trimmedData.birthDate,
        trimmedData.email,
        trimmedData.phoneNumber,
        trimmedData.aboutYou,
        filePath
      );
      await sendCongratulatoryEmail(
        trimmedData.firstName,
        trimmedData.lastName,
        trimmedData.middleName,
        trimmedData.birthDate,
        trimmedData.email,
        trimmedData.phoneNumber,
        trimmedData.aboutYou,
        trimmedData.jobTitle
      );
      res.status(200).json({
        message: 'Mail has been sent successfully',
        messageId: info.messageId,
      });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({
        message: 'Error sending email',
        error: error.toString(),
      });
    }
  });
};

module.exports = applyJob;
