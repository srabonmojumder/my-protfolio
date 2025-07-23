import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Get form data from request
    const body = await request.json();
    const { name, email, message } = body;

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials in environment variables');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Server configuration error: Email credentials not set',
          debug: 'EMAIL_USER or EMAIL_PASS environment variables are missing'
        },
        { status: 500 }
      );
    }

    // Configure nodemailer transport (update with your email provider details)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Change to your email provider
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    console.log('Attempting to send email from:', process.env.EMAIL_USER);
    console.log('Sending to:', process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER);

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER, // Where you want to receive the emails
      subject: `Portfolio Contact: Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Message from Your Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email', 
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
