import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

const getCams = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const cams = await prisma.cams.findUnique({
      where: {
        id: req.query.id ? +req.query.id : undefined,
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

export default getCams
