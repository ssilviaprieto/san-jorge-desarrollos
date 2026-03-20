import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipient = "hsdmorganventas@gmail.com";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { message: "Completá nombre, email y mensaje." },
        { status: 400 },
      );
    }

    const transporter = getTransporter();

    if (!transporter) {
      return NextResponse.json(
        {
          message:
            "El formulario no está configurado todavía. Definí SMTP_HOST, SMTP_PORT, SMTP_USER y SMTP_PASS en Vercel.",
        },
        { status: 500 },
      );
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      replyTo: email,
      subject: `Nueva consulta desde San Jorge Desarrollos | ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7;color:#0f172a">
          <h2 style="margin-bottom:16px">Nueva consulta</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Consulta enviada correctamente." });
  } catch {
    return NextResponse.json(
      { message: "No fue posible enviar la consulta en este momento." },
      { status: 500 },
    );
  }
}
