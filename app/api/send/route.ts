import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, message, name } = await request.json();

  try {
    await resend.sendEmail({
      from: process.env.RESEND_FROM as string,
      to: process.env.RESEND_TO as string,
      subject: `Você recebeu uma mensagem de ${name} do e-mail ${email}`,
      text: message,
    });

    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }

    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      },
    );
  }
}
