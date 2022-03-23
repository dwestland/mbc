import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const {
    title,
    webcamUrl,
    imageUrl,
    imageName,
    description,
    country,
    state,
    area,
    subarea,
  } = req.body.data

  try {
    await prisma.cams.create({
      data: {
        title,
        webcamUrl,
        imageUrl,
        imageName,
        description,
        country,
        state,
        area,
        subarea,
      },
    })

    res.status(201).json({ message: 'Cam saved' })
  } catch (err) {
    res.status(500).json({ message: 'Sorry, unable to handle request' })
  }
  return null
}
