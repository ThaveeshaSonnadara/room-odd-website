import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Ensure the Resend API key is provided via environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 });
    }
    // Basic validation could be expanded
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL;
    if (!toEmail) {
      return NextResponse.json({ error: 'Receiver email not configured.' }, { status: 500 });
    }

    const emailResponse = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'no-reply@resend.dev',
      to: toEmail,
      subject: `New contact from ${name ?? 'Anonymous'} (${email})`,
      html: `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
