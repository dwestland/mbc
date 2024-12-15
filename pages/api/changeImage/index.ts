import type { NextApiRequest, NextApiResponse } from 'next'
import { IncomingForm } from 'formidable'
import AWS from 'aws-sdk'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

// Pass id and file name
// Put request to cams table
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resolve, reject) => {
    const form = new IncomingForm()

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)

      // Save to s3
      const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      })

      const uploadFile = () => {
        const fileContent =
          files.file && files.file[0]
            ? fs.readFileSync(files.file[0].filepath)
            : null
        const filename: string = files.file?.[0]?.originalFilename ?? ''

        const params = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: filename,
          Body: fileContent,
          ContentType: 'image/jpeg',
        }

        s3.upload(
          {
            ...params,
            Bucket: params.Bucket || '',
            Body: fileContent || undefined,
          },
          (error, data) => {
            if (error) {
              console.log('Error', error)
            } else {
              console.log('Upload Success', data.Location)
            }
          }
        )
      }

      uploadFile()

      res.status(200).json({ fields, files })

      return null
    })
  })
}

export default handler
