import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const {
    title,
    webcamUrl,
    imageName,
    description,
    country,
    state,
    area,
    subarea,
    lat,
    lng,
    topCam,
    mbcHosted,
  } = req.body.data

  try {
    await prisma.cams.create({
      data: {
        title,
        webcamUrl,
        imageName,
        description,
        country,
        state,
        area,
        subarea,
        lat,
        lng,
        topCam,
        mbcHosted,
      },
    })

    res.status(201).json({ message: 'Cam saved' })
  } catch (err) {
    res.status(500).json({ message: 'Sorry, unable to handle request' })
  }
  return null
}
