import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('%c req.body ', 'background: red; color: white', req.body)
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
      },
    })

    res.status(201).json({ message: 'Cam saved' })
  } catch (err) {
    res.status(500).json({ message: 'Sorry, unable to handle request' })
  }
  return null
}
