// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SMTPClient } from "emailjs";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { messageBody } = req.body;

  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    const message = await client.sendAsync({
      text: messageBody,
      from: "josevitormarques7@gmail.com",
      to: "josevitormarques7@gmail.com",
      subject: "Lead - Landing Page",
    });
    console.log(message);
  } catch (err) {
    console.error(err);
  }

  res.status(200).json({ name: "Send Mail" });
}
