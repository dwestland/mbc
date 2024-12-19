import type { NextApiRequest, NextApiResponse } from 'next'
import { IncomingForm, File } from 'formidable'
import AWS from 'aws-sdk'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise<void>((resolve, reject) => {
    const form = new IncomingForm()

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)

      // Save to s3
      const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      })

      const file = files.file as File | File[] | undefined

      if (!file) {
        return reject(new Error('File is missing'))
      }

      const fileArray = Array.isArray(file) ? file : [file]
      const firstFile = fileArray[0]

      if (!firstFile || !firstFile.filepath || !firstFile.originalFilename) {
        return reject(new Error('File is missing required properties'))
      }

      const uploadFile = () => {
        const fileContent = fs.readFileSync(firstFile.filepath)
        const filename: string = firstFile?.originalFilename || ''

        const params = {
          Bucket: process.env.AWS_BUCKET_NAME || '',
          Key: filename,
          Body: fileContent,
          ContentType: 'image/jpeg',
        }

        s3.upload(
          params,
          (error: Error, data: AWS.S3.ManagedUpload.SendData) => {
            if (error) {
              console.log('Error', error)
              reject(error)
            } else {
              console.log('Upload Success', data.Location)
              resolve()
            }
          }
        )
      }

      uploadFile()
      return null
    })
  })

  res.status(200).json({ message: 'File uploaded successfully' })
}

export default handler
