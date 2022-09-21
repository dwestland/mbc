import { NextApiRequest, NextApiResponse } from 'next'
import mail from '@sendgrid/mail'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

mail.setApiKey(process.env.SENDGRID_API_KEY)

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
  Email: ${email}\r\n
  mybeachcams.com/detail/${id}`

  const data = {
    to: 'don@westland.net',
    from: 'admin@westland.net',
    subject: `FLAG - ${title} from MyBeachCams.com`,
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

    mail.send(data)

    res.status(201).json({ message: 'Message sent, saved to DB' })
  } catch (err) {
    res.status(500).json({ error: err })
  }
  return null
}
