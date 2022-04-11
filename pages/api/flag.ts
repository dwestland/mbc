import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function init(req, res) {
  const { body } = req

  const message = `
  Title: ${body.title} ID#:${body.id}\r\n
  Location: ${body.subarea} ${body.area} ${body.state} ${body.country}\r\n
  Type: ${body.type}\r\n
  Message: ${body.message}\r\n
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  127.0.0.1/detail/${body.id}`

  const data = {
    to: 'don@westland.net',
    from: 'admin@westland.net',
    subject: `Flag ${body.title} from MyBeachCams.com`,
    text: message,
  }

  // TODO: Add error handling
  mail.send(data)

  res.status(200).json({ status: 'OK' })
}
