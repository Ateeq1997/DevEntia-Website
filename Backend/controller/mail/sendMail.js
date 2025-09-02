// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// dotenv.config();

// // Configure the transporter with your Gmail credentials
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASSWORD,
//   },
// });

// // Function to send notification email to DevEntia team
// async function sendNotificationEmail(senderEmail, message, subject, phoneNumber, fullName) {
//   try {
//     const info = await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: [
//         'contact@deventiatech.com',
//         'deventialimited@gmail.com',
//         'abdulmajid1m2@gmail.com',
//       ],
//       subject: '🔔 New Customer Inquiry',
//       text: message,
//       html: `
//         <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #2a2a2a; border-radius: 12px; padding: 0; background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);">
//           <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 20px; border-radius: 12px 12px 0 0; text-align: center;">
//             <img src="https://avatars.githubusercontent.com/u/153590156?s=200&v=4" alt="DevEntia Tech Logo" style="width: 60px; height: 60px; border-radius: 50%; border: 3px solid white; margin-bottom: 10px;">
//             <h2 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Customer Inquiry</h2>
//           </div>
          
//           <div style="padding: 30px; color: #e5e5e5;">
//             <div style="background: #2a2a2a; border-radius: 8px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #6366f1;">
//               <h3 style="color: #8b5cf6; margin: 0 0 15px 0; font-size: 18px;">Contact Details</h3>
//               <p style="margin: 8px 0; color: #e5e5e5;"><strong style="color: #a855f7;">Full Name:</strong> ${fullName}</p>
//               <p style="margin: 8px 0; color: #e5e5e5;"><strong style="color: #a855f7;">Email:</strong> <a href="mailto:${senderEmail}" style="color: #6366f1; text-decoration: none;">${senderEmail}</a></p>
//               <p style="margin: 8px 0; color: #e5e5e5;"><strong style="color: #a855f7;">Phone:</strong> ${phoneNumber}</p>
//               <p style="margin: 8px 0; color: #e5e5e5;"><strong style="color: #a855f7;">Subject:</strong> ${subject}</p>
//             </div>
            
//             <div style="background: #2a2a2a; border-radius: 8px; padding: 20px; border-left: 4px solid #8b5cf6;">
//               <h3 style="color: #8b5cf6; margin: 0 0 15px 0; font-size: 18px;">Message</h3>
//               <p style="background: #1a1a1a; padding: 15px; border-radius: 6px; color: #e5e5e5; border: 1px solid #3a3a3a; white-space: pre-wrap;">${message}</p>
//             </div>
//           </div>
          
//           <div style="background: #1a1a1a; padding: 15px; border-radius: 0 0 12px 12px; text-align: center; border-top: 1px solid #3a3a3a;">
//             <p style="margin: 0; color: #888; font-size: 12px;">📧 This email was sent via DevEntia Tech contact form</p>
//           </div>
//         </div>
//       `,
//     });

//     console.log('Notification email sent: %s', info.messageId);
//     return info;
//   } catch (error) {
//     throw new Error(`Error sending notification email: ${error.message}`);
//   }
// }

// // Function to send acknowledgment email to the user
// async function sendAcknowledgmentEmail(userEmail, userName) {
//   try {
//     const info = await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: userEmail,
//       subject: '✨ Thank You for Contacting DevEntia Tech - We\'ll Be In Touch Soon!',
//       html: `
//         <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; max-width: 650px; margin: auto; background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
          
//           <!-- Header Section -->
//           <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%); padding: 40px 30px; text-align: center; position: relative;">
//             <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.05); pointer-events: none;"></div>
//             <div style="position: relative; z-index: 1;">
//               <img src="https://avatars.githubusercontent.com/u/153590156?s=200&v=4" alt="DevEntia Tech" style="width: 80px; height: 80px; border-radius: 50%; border: 4px solid rgba(255,255,255,0.2); margin-bottom: 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.3);">
//               <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">Thank You for Reaching Out!</h1>
//               <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px; font-weight: 300;">Your message has been received successfully</p>
//             </div>
//           </div>

//           <!-- Main Content -->
//           <div style="padding: 40px 30px; color: #e5e5e5;">
//             <div style="margin-bottom: 30px;">
//               <h2 style="color: #8b5cf6; font-size: 20px; margin: 0 0 15px 0; font-weight: 600;">Hello ${userName}! 👋</h2>
//               <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.7; color: #d1d5db;">
//                 Thank you for contacting <strong style="color: #a855f7;">DevEntia Tech</strong>. We've received your message and truly appreciate you taking the time to reach out to us.
//               </p>
//             </div>

//             <!-- What's Next Section -->
//             <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border-radius: 12px; padding: 25px; margin: 25px 0; border: 1px solid rgba(139, 92, 246, 0.2);">
//               <h3 style="color: #6366f1; font-size: 18px; margin: 0 0 15px 0; font-weight: 600;">
//                 <span style="background: linear-gradient(135deg, #6366f1, #8b5cf6); width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 10px;"></span>
//                 What Happens Next?
//               </h3>
//               <div style="color: #d1d5db; font-size: 15px; line-height: 1.6;">
//                 <p style="margin: 0 0 12px 0;">🔍 <strong>Review:</strong> Our expert team is carefully reviewing your inquiry</p>
//                 <p style="margin: 0 0 12px 0;">📞 <strong>Response:</strong> We'll contact you within 24-48 hours with detailed information</p>
//                 <p style="margin: 0;">🚀 <strong>Solutions:</strong> We'll discuss how our innovative IT solutions can drive your business growth</p>
//               </div>
//             </div>

//             <!-- Services Highlight - FIXED MOBILE RESPONSIVE LAYOUT -->
//             <div style="margin: 30px 0;">
//               <h3 style="color: #8b5cf6; font-size: 18px; margin: 0 0 20px 0; font-weight: 600; text-align: center;">Why Choose DevEntia Tech?</h3>
              
//               <!-- DESKTOP LAYOUT: Three columns using table cells -->
//               <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="desktop-cards" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                 <tr>
//                   <!-- Card 1: Innovative Solutions -->
//                   <td valign="top" style="width: 33.33%; padding: 0 8px 0 0; vertical-align: top;" class="desktop-card">
//                     <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%); border-radius: 12px; padding: 25px; text-align: center; border: 1px solid rgba(99, 102, 241, 0.3); height: 180px; display: table-cell; vertical-align: middle; background-color: rgba(99, 102, 241, 0.1);">
//                       <div style="color: #6366f1; font-size: 36px; margin-bottom: 15px; line-height: 1;">💡</div>
//                       <h4 style="color: #a855f7; margin: 0 0 12px 0; font-size: 18px; font-weight: 600; line-height: 1.2;">Innovative Solutions</h4>
//                       <p style="color: #d1d5db; margin: 0; font-size: 14px; line-height: 1.4;">Cutting-edge technology tailored to your unique business needs</p>
//                     </div>
//                   </td>
                  
//                   <!-- Card 2: Business Growth -->
//                   <td valign="top" style="width: 33.33%; padding: 0 4px; vertical-align: top;" class="desktop-card">
//                     <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.1) 100%); border-radius: 12px; padding: 25px; text-align: center; border: 1px solid rgba(139, 92, 246, 0.3); height: 180px; display: table-cell; vertical-align: middle; background-color: rgba(139, 92, 246, 0.1);">
//                       <div style="color: #8b5cf6; font-size: 36px; margin-bottom: 15px; line-height: 1;">📈</div>
//                       <h4 style="color: #a855f7; margin: 0 0 12px 0; font-size: 18px; font-weight: 600; line-height: 1.2;">Business Growth</h4>
//                       <p style="color: #d1d5db; margin: 0; font-size: 14px; line-height: 1.4;">Strategic tech solutions that drive measurable business results</p>
//                     </div>
//                   </td>
                  
//                   <!-- Card 3: Tech-Driven Success -->
//                   <td valign="top" style="width: 33.33%; padding: 0 0 0 8px; vertical-align: top;" class="desktop-card">
//                     <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%); border-radius: 12px; padding: 25px; text-align: center; border: 1px solid rgba(168, 85, 247, 0.3); height: 180px; display: table-cell; vertical-align: middle; background-color: rgba(168, 85, 247, 0.1);">
//                       <div style="color: #a855f7; font-size: 36px; margin-bottom: 15px; line-height: 1;">⚡</div>
//                       <h4 style="color: #a855f7; margin: 0 0 12px 0; font-size: 18px; font-weight: 600; line-height: 1.2;">Tech-Driven Success</h4>
//                       <p style="color: #d1d5db; margin: 0; font-size: 14px; line-height: 1.4;">Reliable, scalable IT infrastructure for long-term success</p>
//                     </div>
//                   </td>
//                 </tr>
//               </table>
              
//               <!-- MOBILE LAYOUT: Stacked cards (hidden by default, shown on mobile) -->
//               <div class="mobile-cards" style="display: none;">
//                 <!-- Mobile Card 1 -->
//                 <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%); border-radius: 12px; padding: 25px; text-align: center; border: 1px solid rgba(99, 102, 241, 0.3); margin-bottom: 15px; background-color: rgba(99, 102, 241, 0.1);">
//                   <div style="color: #6366f1; font-size: 36px; margin-bottom: 15px; line-height: 1;">💡</div>
//                   <h4 style="color: #a855f7; margin: 0 0 12px 0; font-size: 18px; font-weight: 600; line-height: 1.2;">Innovative Solutions</h4>
//                   <p style="color: #d1d5db; margin: 0; font-size: 14px; line-height: 1.4;">Cutting-edge technology tailored to your unique business needs</p>
//                 </div>
                
//                 <!-- Mobile Card 2 -->
//                 <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.1) 100%); border-radius: 12px; padding: 25px; text-align: center; border: 1px solid rgba(139, 92, 246, 0.3); margin-bottom: 15px; background-color: rgba(139, 92, 246, 0.1);">
//                   <div style="color: #8b5cf6; font-size: 36px; margin-bottom: 15px; line-height: 1;">📈</div>
//                   <h4 style="color: #a855f7; margin: 0 0 12px 0; font-size: 18px; font-weight: 600; line-height: 1.2;">Business Growth</h4>
//                   <p style="color: #d1d5db; margin: 0; font-size: 14px; line-height: 1.4;">Strategic tech solutions that drive measurable business results</p>
//                 </div>
                
//                 <!-- Mobile Card 3 -->
//                 <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%); border-radius: 12px; padding: 25px; text-align: center; border: 1px solid rgba(168, 85, 247, 0.3); background-color: rgba(168, 85, 247, 0.1);">
//                   <div style="color: #a855f7; font-size: 36px; margin-bottom: 15px; line-height: 1;">⚡</div>
//                   <h4 style="color: #a855f7; margin: 0 0 12px 0; font-size: 18px; font-weight: 600; line-height: 1.2;">Tech-Driven Success</h4>
//                   <p style="color: #d1d5db; margin: 0; font-size: 14px; line-height: 1.4;">Reliable, scalable IT infrastructure for long-term success</p>
//                 </div>
//               </div>
//             </div>

//             <!-- Contact Info -->
//             <div style="background: rgba(26, 26, 26, 0.8); border-radius: 12px; padding: 25px; margin: 25px 0; border: 1px solid rgba(42, 42, 42, 0.8);">
//               <h3 style="color: #8b5cf6; font-size: 16px; margin: 0 0 15px 0; font-weight: 600;">Need Immediate Assistance?</h3>
//               <p style="color: #d1d5db; margin: 0 0 15px 0; font-size: 14px;">Don't hesitate to reach out to us directly:</p>
//               <div style="color: #9ca3af; font-size: 14px;">
//                 <p style="margin: 5px 0;">📧 <strong style="color: #a855f7;">Email:</strong> <a href="mailto:contact@deventiatech.com" style="color: #6366f1; text-decoration: none;">contact@deventiatech.com</a></p>
//                 <p style="margin: 5px 0;">🌐 <strong style="color: #a855f7;">Website:</strong> <a href="https://deventiatech.com" style="color: #6366f1; text-decoration: none;">deventiatech.com</a></p>
//               </div>
//             </div>
//           </div>

//           <!-- Footer -->
//           <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%); padding: 25px 30px; text-align: center; border-top: 1px solid rgba(42, 42, 42, 0.8);">
//             <p style="margin: 0 0 10px 0; color: #8b5cf6; font-weight: 600; font-size: 16px;">DevEntia Tech</p>
//             <p style="margin: 0 0 15px 0; color: #9ca3af; font-size: 13px; font-style: italic;">"Driving Innovation, Delivering Excellence"</p>
//             <div style="border-top: 1px solid rgba(42, 42, 42, 0.8); padding-top: 15px;">
//               <p style="margin: 0; color: #6b7280; font-size: 11px;">© 2025 DevEntia Tech. All rights reserved.</p>
//               <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 11px;">This is an automated message. Please do not reply directly to this email.</p>
//             </div>
//           </div>
//         </div>

//         <!-- EMAIL-SAFE RESPONSIVE CSS -->
//         <style>
//           /* Reset for email clients */
//           table { border-collapse: collapse !important; }
//           .desktop-cards, .desktop-card { border: 0; cellpadding: 0; cellspacing: 0; }
          
//           /* Hide mobile cards by default */
//           .mobile-cards { display: none !important; }
          
//           /* MOBILE RESPONSIVE - Works in most email clients */
//           @media only screen and (max-width: 600px) {
//             /* Hide desktop table layout on mobile */
//             .desktop-cards { display: none !important; }
            
//             /* Show mobile stacked cards */
//             .mobile-cards { 
//               display: block !important; 
//               width: 100% !important;
//             }
            
//             /* Ensure mobile container uses full width */
//             .mobile-cards div {
//               width: 100% !important;
//               box-sizing: border-box !important;
//             }
            
//             /* Responsive container */
//             div[style*="max-width: 650px"] {
//               max-width: 100% !important;
//               width: 100% !important;
//               margin: 0 10px !important;
//             }
            
//             /* Responsive padding */
//             div[style*="padding: 40px 30px"] {
//               padding: 20px 15px !important;
//             }
//           }
          
//           /* Additional mobile support for older clients */
//           @media screen and (max-width: 600px) {
//             .desktop-cards { display: none !important; }
//             .mobile-cards { display: block !important; }
//           }
          
//           /* Extra small screens */
//           @media only screen and (max-width: 480px) {
//             .mobile-cards div {
//               margin-bottom: 20px !important;
//             }
            
//             .mobile-cards div:last-child {
//               margin-bottom: 0 !important;
//             }
//           }
          
//           /* Outlook specific fixes */
//           @media screen and (max-width: 600px) {
//             .desktop-cards tr, 
//             .desktop-cards td { 
//               display: block !important; 
//               width: 100% !important; 
//             }
//           }
//         </style>
//       `,
//     });

//     console.log('Acknowledgment email sent: %s', info.messageId);
//     return info;
//   } catch (error) {
//     throw new Error(`Error sending acknowledgment email: ${error.message}`);
//   }
// }

// // Express route handler to send emails
// const sendMail = async (req, res) => {
//   console.log('mail data: ', req.body);
//   const { senderEmail, message, subject, phoneNumber, fullName } = req.body;

//   if (!senderEmail || !message || !subject || !phoneNumber || !fullName) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }

//   try {
//     // Send notification email to DevEntia team
//     const notificationInfo = await sendNotificationEmail(
//       senderEmail,
//       message,
//       subject,
//       phoneNumber,
//       fullName
//     );

//     // Send acknowledgment email to the user
//     const acknowledgmentInfo = await sendAcknowledgmentEmail(senderEmail, fullName);

//     res.status(200).json({
//       message: 'Emails sent successfully',
//       notificationMessageId: notificationInfo.messageId,
//       acknowledgmentMessageId: acknowledgmentInfo.messageId,
//     });
//   } catch (error) {
//     console.error('Error sending emails:', error);
//     res.status(500).json({
//       message: 'Error sending emails',
//       error: error.toString(),
//     });
//   }
// };

// module.exports = sendMail;



const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

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
    throw new Error(`Error sending acknowledgment email: ${error.message}`);
  }
}

// Express route handler to send emails
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
    // Send notification email to DevEntia team
    const notificationInfo = await sendNotificationEmail(
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
    console.error('Error sending emails:', error);
    res.status(500).json({
      message: 'Error sending emails',
      error: error.toString(),
    });
  }
};

module.exports = sendMail;