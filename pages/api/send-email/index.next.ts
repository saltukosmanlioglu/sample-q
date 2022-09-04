// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

require("dotenv").config();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "saltuk.osmanlioglu@gmail.com",
        pass: process.env.password,
      },
    });

    let info = {
      from: "saltuk.osmanlioglu@gmail.com",
      subject: "TV Show Recommendation",
      text: req.body.text,
      to: req.body.to,
    };

    transporter.sendMail(info, (err, info) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(info);
      }
    });
  }
}
