import { NextApiRequest, NextApiResponse } from 'next'
import mail from '@sendgrid/mail'
import prisma from '@/utils/prisma'

const apiKey = process.env.SENDGRID_API_KEY

if (!apiKey) {
  throw new Error('SENDGRID_API_KEY is not defined')
}

mail.setApiKey(apiKey)

export default async function init(req: NextApiRequest, res: NextApiResponse) {
  const {
    title,
    id,
    subarea,
    area,
    state,
    country,
    type,
    message,
    name,
    email,
  } = req.body

  const flagMessage = `
  Title: ${title} ID#:${id}\r\n
  Location: ${subarea} ${area} ${state} ${country}\r\n
  Type: ${type}\r\n
  Message: ${message}\r\n
  Name: ${name}\r\n
  Email: ${email}\r\n\n
  Link to cam:
  mybeachcams.com/detail/${id}`

  const data = {
    to: 'don@westland.net',
    from: 'admin@westland.net',
    subject: `MyBeachCams FLAG - ${title}`,
    text: flagMessage,
  }

  try {
    await prisma.flag.create({
      data: {
        camId: +id,
        name,
        email,
        type,
        message,
      },
    })

    await mail.send(data)

    res.status(201).json({ message: 'Message sent, saved to DB' })
  } catch (err) {
    res.status(500).json({ error: err })
  }
  return null
}
