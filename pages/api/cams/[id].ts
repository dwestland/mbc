import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const cams = await prisma.cams.findUnique({
      where: {
        id: +req.query.id,
      },
      select: {
        area: true,
        country: true,
        description: true,
        hidden: true,
        id: true,
        imageName: true,
        lat: true,
        lng: true,
        longDescription: true,
        mbcHosted: true,
        mbcHostedYoutube: true,
        moreCams: true,
        postalCode: true,
        state: true,
        subarea: true,
        title: true,
        titleSlug: true,
        topCam: true,
        youtubeId: true,
        webcamUrl: true,
      },
    })
    res.status(200).json({ cams })
  } catch (err) {
    console.log(err)
    res.status(403).json({ err: 'Error occurred.' })
  }

  return null
}
