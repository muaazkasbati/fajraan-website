// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { name, email, phone, company, message, subject, plan } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  try {

    // Setup email transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      auth: {
        user: 'muaazkasbati@gmail.com',
        pass: 'hfuy jvtl lnjj skve'
      },
    });

    const mailOptions = {
      from: {
        name: "Fajraan Tech",
        address: "info@fajraan.com",
      },
      to: "info@fajraan.com",
      subject: `Contact Form Submission - ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #333; text-align: center;">Contact Form Submission</h2>
          <p style="color: #555; font-size: 16px;">Thank you for reaching out to Fajraan Tech! Below are the details you submitted:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${phone}</td>
            </tr>
            ` : ''}
            ${subject ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Subject:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${subject}</td>
            </tr>
            ` : ''}
            ${company ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${company}</td>
            </tr>
            ` : ''}
            ${plan ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Plan:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${plan}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Message:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${message || 'No message provided'}</td>
1976
            </tr>
          </table>
          <p style="color: #555; font-size: 16px; text-align: center;">We will get back to you soon!</p>
          <p style="color: #999; font-size: 14px; text-align: center;">&copy; ${new Date().getFullYear()} Fajraan Tech. All rights reserved.</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Customer created, setup link sent to email' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
