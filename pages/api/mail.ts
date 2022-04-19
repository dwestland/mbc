import { NextApiRequest, NextApiResponse } from 'next'
import mail from '@sendgrid/mail'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function init(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body

  const emailMessage = `
  Name: ${name}\r\n
  Email: ${email}\r\n
  Message: ${message}\r\n
  `

  const data = {
    to: 'don@westland.net',
    from: 'admin@westland.net',
    subject: `MESSAGE - MyBeachCams.com from ${name}`,
    text: emailMessage,
  }

  try {
    await prisma.message.create({
      data: {
        name,
        email,
        message,
      },
    })

    mail.send(data)

    res.status(201).json({ message: 'Message sent, saved to DB' })
  } catch (err) {
    res.status(500).json({ error: err })
  }
  return null
}
