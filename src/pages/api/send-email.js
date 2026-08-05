// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { name, email, phone, company, message, subject, plan, fleetSize, bookingMethod, leadForm = false } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  try {

    // Setup email transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // Port 465 uses SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: {
        name: process.env.SMTP_FROM_NAME,
        address: process.env.SMTP_USER,
      },
      to: "info@fajraan.com",
      subject: `${leadForm ? 'Lead Form' : 'Contact Form'} Submission - ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #333; text-align: center;">${leadForm ? 'Lead Form' : 'Contact Form'} Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          ${name ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${name}</td>
            </tr>
          ` : ''}
          ${email ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${email}</td>
            </tr>
            ` : ''}
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
            ${fleetSize ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Fleet Size:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${fleetSize}</td>
            </tr>
            ` : ''}
            ${bookingMethod ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Booking Method:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${bookingMethod}</td>
            </tr>
            ` : ''}
            ${message ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Message:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${message || 'No message provided'}</td>
            </tr>
            ` : ''}
          </table>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}
