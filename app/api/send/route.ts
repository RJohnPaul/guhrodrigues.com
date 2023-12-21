import { NextResponse } from "next/server";

import { Resend } from "resend";

import { EmailTemplate } from "@/components/Elements/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const POST = async (request: Request) => {
  const { name, message, email } = await request.json();

  try {
    await resend.sendEmail({
      from: process.env.RESEND_FROM as string,
      to: process.env.RESEND_TO as string,
      subject: `Mensagem de ${name} — guhrodrigues.com`,
      react: EmailTemplate({
        name,
        message,
        email,
      }),
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
};

export { POST };
