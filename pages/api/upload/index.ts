import { IncomingForm } from 'formidable'
import mv from 'mv'

// const mv = require('mv')

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req, res) => {
  await new Promise((resolve, reject) => {
    const form = new IncomingForm()

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      const oldPath = files.file.filepath
      const newPath = `./public/webcam-images/${files.file.originalFilename}`

      mv(oldPath, newPath, (err) => {})
      res.status(200).json({ fields, files })

      return null
    })
  })
}
