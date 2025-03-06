const nodemailer = require('nodemailer');

// Configure the transporter with your Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abdulmajid1m2@gmail.com', // Use environment variables for security
    pass: 'cekpalvvmiqcxvje', // Use environment variables for security
  },
});

// Function to send an email
async function sendEmail(senderEmail, message, subject, phoneNumber, fullName) {
  try {
    const info = await transporter.sendMail({
      from: 'abdulmajid1m2@gmail.com', // Use the sender's email
      to: [
        'contact@deventiatech.com',
        'deventialimited@gmail.com',
        'abdulmajid1m2@gmail.com',
      ],
      subject: '🔔 New Customer Inquiry',
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
          <div style="text-align: center;">
            <img src="https://avatars.githubusercontent.com/u/153590156?s=200&v=4" alt="Company Logo" style="width: 100px; height: auto; border-radius: 8px;">
          </div>
          <h2 style="color: #333; text-align: center;">New Contact Message</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${senderEmail}" style="color: #007bff;">${senderEmail}</a></p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="border-top: 1px solid #ddd; padding-top: 10px;"><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${message}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="text-align: center; color: #888; font-size: 12px;">This email was sent via your contact form.</p>
        </div>
      `,
    });

    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
}

// Express route handler to send an email
const sendMail = async (req, res) => {
  const { senderEmail, message, subject, phoneNumber, fullName } = req.body;

  if (!senderEmail || !message || !subject || !phoneNumber || !fullName) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const info = await sendEmail(
      senderEmail,
      message,
      subject,
      phoneNumber,
      fullName
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
};

module.exports = sendMail;
