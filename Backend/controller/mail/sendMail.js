const nodemailer = require('nodemailer');

// Configure the transporter with your Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER || 'deventialimited@gmail.com',
    pass: process.env.SMTP_PASSWORD || 'tyxx qybo furx hzzl', // Gmail App Password
  },
});

// Function to send an email
async function sendEmail(senderEmail, message, subject, phoneNumber, fullName, isNewsletter = false) {
  try {
    let mailOptions;
    
    if (isNewsletter) {
      // Newsletter subscription - send welcome email to customer
      mailOptions = {
        from: process.env.SMTP_USER || 'deventialimited@gmail.com',
        to: senderEmail, // Send TO the customer's email
        subject: '🎉 Welcome to DevEntia Tech Newsletter!',
        text: `Thank you for subscribing to our newsletter! We'll keep you updated with the latest tech insights and company news.`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
            <div style="text-align: center;">
              <img src="https://avatars.githubusercontent.com/u/153590156?s=200&v=4" alt="DevEntia Tech Logo" style="width: 100px; height: auto; border-radius: 8px;">
            </div>
            <h2 style="color: #333; text-align: center;">🎉 Welcome to DevEntia Tech Newsletter!</h2>
            <p>Hello there!</p>
            <p>Thank you for subscribing to our newsletter! We're excited to have you on board.</p>
            <p>You'll now receive updates about:</p>
            <ul style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
              <li>Latest tech insights and trends</li>
              <li>Company news and updates</li>
              <li>New services and offerings</li>
              <li>Industry best practices</li>
            </ul>
            <p>If you have any questions, feel free to reach out to us at <a href="mailto:contact@deventiatech.com" style="color: #007bff;">contact@deventiatech.com</a></p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="text-align: center; color: #888; font-size: 12px;">This email was sent from DevEntia Tech newsletter subscription.</p>
          </div>
        `,
      };
      
      // Also send notification to company (optional)
      const notificationMail = {
        from: process.env.SMTP_USER || 'deventialimited@gmail.com',
        to: ['deventialimited@gmail.com'], // Only company email
        subject: '📧 New Newsletter Subscription',
        text: `New newsletter subscription from: ${senderEmail}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
            <h2 style="color: #333; text-align: center;">📧 New Newsletter Subscription</h2>
            <p><strong>Subscriber Email:</strong> <a href="mailto:${senderEmail}" style="color: #007bff;">${senderEmail}</a></p>
            <p><strong>Subscription Date:</strong> ${new Date().toLocaleDateString()}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="text-align: center; color: #888; font-size: 12px;">New newsletter subscription via blog page.</p>
          </div>
        `,
      };
      
      // Send both emails
      await transporter.sendMail(notificationMail);
    } else {
      // Regular contact form - send to company
      mailOptions = {
        from: process.env.SMTP_USER || 'deventialimited@gmail.com',
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
      };
    }
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
}

// Express route handler to send an email
const sendMail = async (req, res) => {
  console.log('mail data: ', req.body);
  const { senderEmail, message, subject, phoneNumber, fullName, isNewsletter } = req.body;

  // Check if this is a newsletter subscription
  const isNewsletterSub = isNewsletter || (subject === 'Newsletter Subscription' && message === 'Newsletter subscription request');

  if (isNewsletterSub) {
    // Newsletter subscription - only email is required
    if (!senderEmail) {
      return res.status(400).json({ message: 'Email is required for newsletter subscription.' });
    }
  } else {
    // Regular contact form - all fields required
    if (!senderEmail || !message || !subject || !phoneNumber || !fullName) {
      return res.status(400).json({ message: 'All fields are required for contact form.' });
    }
  }

  try {
    const info = await sendEmail(
      senderEmail,
      message || 'Newsletter subscription request',
      subject || 'Newsletter Subscription',
      phoneNumber || 'N/A',
      fullName || 'Newsletter Subscriber',
      isNewsletterSub
    );
    res.status(200).json({
      message: isNewsletterSub ? 'Newsletter subscription successful!' : 'Mail has been sent successfully',
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
