
import { emailTemplate } from '@/app/template/emailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_ORIGIN = process.env.ALLOW_ORIGIN;
const API_KEY = process.env.NEXT_PUBLIC_API_SECRET_KEY;

export async function POST(req) {
  try {

    const origin = req.headers.get('origin') || req.headers.get('referer'); 
    const apiKey = req.headers.get('x-api-key');

    if (!origin || !origin.startsWith(ALLOWED_ORIGIN) || apiKey !== API_KEY) {
        return NextResponse.json(
          { message: 'Unauthorized access' },
          { status: 403 }
        );
    }

    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    //console.log(firstName, lastName, email, phone, subject, message);

    const emailHtmlContent = emailTemplate(firstName, lastName, email, phone, subject, message);

    // Send email via Resend
    const { data, error} = await resend.emails.send({
        from: 'My Portfolio <onboarding@resend.dev>',
        to: process.env.MY_EMAIL,
        subject: subject,
        text: `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
        html: emailHtmlContent
    });

    if (error) {
        //console.error('Error sending email:', error);
        return NextResponse.json(
          { message: 'Failed to send email. Please try again later.' },
          { status: 500 }
        );
    }
    else {
        //console.log('Email sent:', data);
        // Return success response
        return NextResponse.json(
          { message: 'Mail sent successfully.' },
          { status: 200 }
        );
    }

  } catch (error) {
    //console.error('Error processing request:', error);
    return NextResponse.json(
      { message: 'Internal server error.' },
      { status: 500 }
    );
  }
}