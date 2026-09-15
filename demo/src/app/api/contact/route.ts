import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  message: z.string().min(1).max(5000)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // TODO: wire this up to an actual email provider, e.g. Resend
    // (https://resend.com) or Nodemailer + SMTP. Example with Resend:
    //
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "portfolio@yourdomain.com",
    //   to: "you@example.com",
    //   subject: `New message from ${data.name}`,
    //   text: `${data.message}\n\nFrom: ${data.name} (${data.email})`,
    // });

    console.log("Contact form submission:", data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
