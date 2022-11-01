import { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from '@prisma/client'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Remove extra spaces and add AND operator
  const query = req.body.search.term
    .trim()
    .replace(/ +(?= )/g, '')
    .split(' ')
    .join(' & ')

  try {
    const cams: any = await prisma.$queryRaw(
      Prisma.sql`select id, title, description, lat, lng, top_cam, mbc_hosted, country, state, area, subarea, webcam_url, image_name
        from cams
        where to_tsvector(
          title || ' ' || 
          description || ' ' || 
          lat || ' ' || 
          lng || ' ' || 
          top_cam || ' ' || 
          mbc_hosted || ' ' || 
          country || ' ' || 
          state || ' ' || 
          area || ' ' || 
          subarea || ' ' || 
          webcam_url || ' ' ||
          image_name
        ) @@ to_tsquery(${query});`
    )

    cams.map((cam) => {
      cam.topCam = cam.top_cam
      delete cam.top_cam

      cam.mbcHosted = cam.mbc_hosted
      delete cam.mbc_hosted

      cam.webcamUrl = cam.webcam_url
      delete cam.webcam_url

      cam.imageName = cam.image_name
      delete cam.image_name

      return cam
    })

    res.status(200).json({ cams })
  } catch (err) {
    console.log(err)
    res.status(403).json({ err: 'Error occurred.' })
  }
  return null
}
