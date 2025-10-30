const { formidable } = require('formidable');
const fs = require('fs');
const nodemailer = require('nodemailer');
const mime = require('mime-types');

exports.handleContactForm = async (req, res) => {
  try {
    const form = formidable({
      multiples: true, 
      keepExtensions: true,
    });

    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    const { name, email, challenge, phone, company } = fields;
    const attachments = [];

    const addAttachment = (file) => {
      if (!file) return;

      const fileArray = Array.isArray(file) ? file : [file];

      for (const f of fileArray) {
        if (!f?.filepath || !fs.existsSync(f.filepath)) continue; 

        const filename = f.originalFilename || 'attachment';
        const mimeType = mime.lookup(filename) || 'application/octet-stream';
        const fileContent = fs.readFileSync(f.filepath);

        attachments.push({
          filename,
          content: fileContent,
          contentType: mimeType,
        });
      }
    };

    // Add all possible uploaded files
    addAttachment(files.file);
    addAttachment(files.voice);

    // ✅ Setup Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // ✅ Send to admin and user
    const recipients = [process.env.SMTP_USER];
    if (email) recipients.push(email);

    const mailOptions = {
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: recipients,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Challenge/Goal:</strong> ${challenge}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    // ✅ Clean temp files
    for (const key in files) {
      const f = files[key];
      const arr = Array.isArray(f) ? f : [f];
      for (const item of arr) {
        if (item?.filepath && fs.existsSync(item.filepath)) fs.unlinkSync(item.filepath);
      }
    }

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};
