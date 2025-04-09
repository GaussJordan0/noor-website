    import { Resend } from 'resend';

    export const dynamic = 'force-dynamic'; // Optional but helps during dev
    const resend = new Resend(process.env.RESEND_API_KEY);

    export async function POST(req) {
    try {
        const data = await req.json();

        const { name, lastname, email, subject, number, message } = data;

        const fullName = `${name} ${lastname}`;
        const mailSubject = subject || 'Neue Nachricht von sam-physio.de';

        const emailResponse = await resend.emails.send({
        from: 'Kontaktformular <info@sam-physio.de>',
        to: ['info@sam-physio.de'],
        subject: mailSubject,
        reply_to: email, // So you can reply to user's message directly
        html: `
            <p><strong>Von:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${number}</p>
            <p><strong>Nachricht:</strong><br/>${message}</p>
        `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return new Response(JSON.stringify({ error: 'Email failed' }), { status: 500 });
    }
    }
