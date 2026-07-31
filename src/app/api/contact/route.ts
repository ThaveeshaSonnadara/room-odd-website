import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured.' },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, phone, projectType, budget, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required.' },
        { status: 400 },
      );
    }

    const toEmail = process.env.CONTACT_RECEIVER_EMAIL;
    if (!toEmail) {
      return NextResponse.json(
        { error: 'Receiver email not configured.' },
        { status: 500 },
      );
    }

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || 'Room ODD <onboarding@resend.dev>';

    // Send email using Resend template 'new-consultation-request'
    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Consultation Request from ${name || 'Client'} (${projectType || 'General'})`,
      template: {
        id: 'new-consultation-request',
        variables: {
          // Standard lowercase keys
          name: name || 'Not specified',
          email: email,
          phone: phone || 'Not provided',
          projectType: projectType || 'General Consultation',
          budget: budget || 'Not specified',
          message: message,

          // Upper/snake case fallbacks to match any Resend template syntax
          NAME: name || 'Not specified',
          EMAIL: email,
          PHONE: phone || 'Not provided',
          PROJECT_TYPE: projectType || 'General Consultation',
          BUDGET: budget || 'Not specified',
          MESSAGE: message,
        },
      },
    });

    if (emailResponse.error) {
      console.error('Resend template error:', emailResponse.error);
      return NextResponse.json(
        { error: 'Failed to send consultation email.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data: emailResponse.data });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 },
    );
  }
}
