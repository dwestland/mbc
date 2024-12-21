import { NextApiRequest, NextApiResponse } from 'next'
import mail from '@sendgrid/mail'
import prisma from '@/utils/prisma'

const apiKey = process.env.SENDGRID_API_KEY

if (!apiKey) {
  throw new Error('SENDGRID_API_KEY is not defined')
}

mail.setApiKey(apiKey)

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
    subject: `MyBeachCams MESSAGE from ${name}`,
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

    await mail.send(data)

    res.status(201).json({ message: 'Message sent, saved to DB' })
  } catch (err) {
    console.error('Error:', err)

    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to send email or save message' })
    }
  }
  return null
}
