import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      // Create a nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_IT,
          pass: process.env.GMAIL_PASSWORD,
        },
      });

      // Email options
      const mailOptions: nodemailer.SendMailOptions = {
        from: process.env.GMAIL_IT,
        to: process.env.GMAIL_COMMS,
        subject: "New Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send email
      const info = await transporter.sendMail(mailOptions);

      const customResponse = {
        "Message ID": info.messageId,
        "Preview URL:": nodemailer.getTestMessageUrl(info),
        SMTPAccepted: info.accepted,
        ...info,
      }

      return NextResponse.json(customResponse);
    } catch (error) {
      return Response.json(error);
    }
  } else {
    return Response.json({ error: "Method Not Allowed" });
  }
}
