import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const {
    area,
    country,
    description,
    hidden,
    imageName,
    lat,
    lng,
    longDescription,
    mbcHostedYoutube,
    moreCams,
    postalCode,
    state,
    subarea,
    title,
    titleSlug,
    topCam,
    youtubeId,
    webcamUrl,
  } = req.body.data

  try {
    await prisma.cams.create({
      data: {
        area,
        country,
        description,
        hidden,
        imageName,
        lat,
        lng,
        longDescription,
        mbcHostedYoutube,
        moreCams,
        postalCode,
        state,
        subarea,
        title,
        titleSlug,
        topCam,
        youtubeId,
        webcamUrl,
      },
    })

    res.status(201).json({ message: 'Cam saved' })
  } catch (err) {
    res.status(500).json({ message: 'Sorry, unable to handle request' })
  }
  return null
}
