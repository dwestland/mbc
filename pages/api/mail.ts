// const mail = require('@sendgrid/mail')

import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function init(req, res) {
  const { body } = req

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}\r\n
  `

  const data = {
    to: 'don@westland.net',
    from: 'admin@westland.net',
    subject: 'MyBeachCams.com Message',
    text: message,
  }

  mail.send(data)

  res.status(200).json({ status: 'OK' })
}
