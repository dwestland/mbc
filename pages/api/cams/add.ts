import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'
import { getSession } from 'next-auth/react'

const getCams = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: any = await getSession({ req })
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

  if (session?.user.role === 'ADMIN') {
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
          updatedAt: new Date(),
        },
      })
      res.status(201).json({ message: 'Cam saved' })
    } catch (err) {
      console.error('Failed to create cam:', {
        error: err,
        requestBody: req.body.data,
      })
      res.status(500).json({
        message: 'Sorry, unable to handle request',
        error: err instanceof Error ? err.message : 'Unknown error',
      })
    }
  } else {
    res.status(401)
    res.end(`Unauthorized`)
  }

  return null
}

export default getCams
