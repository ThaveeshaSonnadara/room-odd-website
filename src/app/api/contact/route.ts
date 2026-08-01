import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  submittedAt: string;
}): string {
  const { name, email, phone, projectType, budget, message, submittedAt } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Consultation Request — Room ODD</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #121316;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 640px; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          
          <!-- Top Bronze Line -->
          <tr>
            <td style="background-color: #b38051; height: 4px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 36px 40px 24px 40px; background-color: #ffffff; border-bottom: 1px solid #f4f4f5;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <h1 style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: normal; color: #121316; letter-spacing: -0.5px;">
                      Room <span style="font-family: Arial, sans-serif; font-weight: 700; color: #b38051; font-size: 24px; letter-spacing: 2px; text-transform: uppercase;">ODD</span>
                    </h1>
                    <p style="margin: 4px 0 0 0; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; color: #71717a;">
                      Chartered Architectural Consultancy &middot; Sri Lanka
                    </p>
                  </td>
                  <td align="right" valign="top">
                    <span style="display: inline-block; padding: 6px 12px; background-color: #f9f8f5; border: 1px solid #e8e4da; border-radius: 2px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #b38051;">
                      New Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Banner Title -->
          <tr>
            <td style="padding: 28px 40px 16px 40px; background-color: #fafafa;">
              <h2 style="margin: 0 0 8px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 22px; font-weight: normal; color: #121316;">
                New Consultation Request
              </h2>
              <p style="margin: 0; font-size: 13px; color: #52525b; line-height: 1.5;">
                A client has submitted a consultation request through the <strong>Room ODD</strong> website.
              </p>
            </td>
          </tr>

          <!-- Client Information Table Section -->
          <tr>
            <td style="padding: 24px 40px 16px 40px;">
              <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #b38051;">
                01. Client Information
              </p>
              
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; width: 100%; border: 1px solid #e4e4e7; border-radius: 4px; overflow: hidden;">
                <tr style="background-color: #ffffff;">
                  <td width="35%" style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #f4f4f5; border-right: 1px solid #f4f4f5;">
                    Full Name
                  </td>
                  <td width="65%" style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #121316; border-bottom: 1px solid #f4f4f5;">
                    ${escapeHtml(name)}
                  </td>
                </tr>
                <tr style="background-color: #fafafa;">
                  <td width="35%" style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #f4f4f5; border-right: 1px solid #f4f4f5;">
                    Email Address
                  </td>
                  <td width="65%" style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #b38051; border-bottom: 1px solid #f4f4f5;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #b38051; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr style="background-color: #ffffff;">
                  <td width="35%" style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #f4f4f5; border-right: 1px solid #f4f4f5;">
                    Phone Number
                  </td>
                  <td width="65%" style="padding: 12px 16px; font-size: 14px; color: #27272a; border-bottom: 1px solid #f4f4f5;">
                    ${escapeHtml(phone)}
                  </td>
                </tr>
                <tr style="background-color: #fafafa;">
                  <td width="35%" style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #f4f4f5; border-right: 1px solid #f4f4f5;">
                    Project Type
                  </td>
                  <td width="65%" style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #121316; border-bottom: 1px solid #f4f4f5;">
                    ${escapeHtml(projectType)}
                  </td>
                </tr>
                <tr style="background-color: #ffffff;">
                  <td width="35%" style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; border-right: 1px solid #f4f4f5;">
                    Estimated Budget
                  </td>
                  <td width="65%" style="padding: 12px 16px; font-size: 14px; color: #27272a;">
                    ${escapeHtml(budget)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Message / Brief Section -->
          <tr>
            <td style="padding: 16px 40px 24px 40px;">
              <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #b38051;">
                02. Project Description &amp; Requirements
              </p>
              
              <div style="background-color: #f9f8f5; border-left: 4px solid #b38051; border-top: 1px solid #e8e4da; border-right: 1px solid #e8e4da; border-bottom: 1px solid #e8e4da; border-radius: 0 4px 4px 0; padding: 20px 24px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.65; color: #27272a; white-space: pre-wrap;">${escapeHtml(message)}</p>
              </div>
            </td>
          </tr>

          <!-- Submission Metadata Section -->
          <tr>
            <td style="padding: 8px 40px 28px 40px;">
              <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #b38051;">
                03. Submission Timestamp
              </p>
              
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; width: 100%; border: 1px solid #e4e4e7; border-radius: 4px;">
                <tr style="background-color: #fafafa;">
                  <td width="35%" style="padding: 10px 16px; font-size: 11px; font-weight: 600; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; border-right: 1px solid #f4f4f5;">
                    Date &amp; Time
                  </td>
                  <td width="65%" style="padding: 10px 16px; font-size: 12px; color: #52525b; font-family: monospace;">
                    ${escapeHtml(submittedAt)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Action Button -->
          <tr>
            <td align="center" style="padding: 8px 40px 36px 40px;">
              <a href="mailto:${escapeHtml(email)}?subject=Re:%20Room%20ODD%20Consultation%20Inquiry%20-%20${encodeURIComponent(name)}" style="display: inline-block; padding: 14px 32px; background-color: #121316; color: #ffffff; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; text-decoration: none; border-radius: 2px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
                Reply to Client &rarr;
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 28px 40px; background-color: #fafafa; border-top: 1px solid #e4e4e7; text-align: center;">
              <p style="margin: 0 0 6px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; color: #121316;">
                Room <span style="font-family: Arial, sans-serif; font-weight: 700; color: #b38051; font-size: 14px;">ODD</span>
              </p>
              <p style="margin: 0 0 12px 0; font-size: 11px; color: #71717a; line-height: 1.5;">
                Chartered Architectural Consultancy &middot; 42 Ward Place, Colombo 07, Sri Lanka
              </p>
              <p style="margin: 0; font-size: 11px; color: #a1a1aa;">
                <a href="mailto:studio@roomodd.lk" style="color: #b38051; text-decoration: none;">studio@roomodd.lk</a> &middot; +94 11 269 4200 &middot; <a href="https://www.roomodd.lk" style="color: #b38051; text-decoration: none;">www.roomodd.lk</a>
              </p>
              <p style="margin: 16px 0 0 0; font-size: 10px; color: #a1a1aa;">
                &copy; ${new Date().getFullYear()} Room ODD (Pvt) Ltd. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

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

    const submittedAt = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Colombo',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const clientName = name || 'Valued Client';
    const selectedProjectType = projectType || 'General Consultation';
    const selectedBudget = budget || 'Prefer not to say';

    const emailHtml = generateEmailHtml({
      name: clientName,
      email,
      phone: phone || 'Not provided',
      projectType: selectedProjectType,
      budget: selectedBudget,
      message,
      submittedAt,
    });

    const emailText = `NEW CONSULTATION REQUEST — ROOM ODD

Client Information:
- Full Name: ${clientName}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Project Type: ${selectedProjectType}
- Estimated Budget: ${selectedBudget}

Project Description & Requirements:
${message}

Submission Timestamp: ${submittedAt}

Room ODD (Pvt) Ltd | Chartered Architectural Consultancy | 42 Ward Place, Colombo 07, Sri Lanka
studio@roomodd.lk | +94 11 269 4200 | www.roomodd.lk`;

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Consultation Request from ${clientName} (${selectedProjectType})`,
      html: emailHtml,
      text: emailText,
    });

    if (emailResponse.error) {
      console.error('Resend email error:', emailResponse.error);
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
