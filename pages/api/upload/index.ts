import { IncomingForm } from 'formidable'
import mv from 'mv'
import AWS from 'aws-sdk'

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

      // Save to s3
      const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      })

      const uploadFile = () => {
        // const fileContent = files.file.filepath
        const filename: any = files.file.originalFilename

        const params = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: filename,
          Body: files.file.filepath,
          ContentType: 'image/jpeg',
        }

        s3.upload(params, (error, data) => {
          if (error) {
            console.log('Error', error)
          } else {
            console.log('Upload Success', data.Location)
          }
        })
      }
      uploadFile()

      // Save file locally
      const oldPath = files.file.filepath
      const newPath = `./public/webcam-images/${files.file.originalFilename}`

      console.log('oldPath ', oldPath)
      console.log('process.argv ', process.argv)
      console.log('files.file.originalFilename ', files.file.originalFilename)

      mv(oldPath, newPath, (error) => {
        console.log(error)
      })
      res.status(200).json({ fields, files })

      return null
    })
  })
}
