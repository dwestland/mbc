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
    oldImageUrl,
    description,
    country,
    state,
    area,
    subArea,
    authorId,
  } = req.body.data

  try {
    await prisma.cams.create({
      data: {
        title,
        webcamUrl,
        oldImageUrl,
        description,
        country,
        state,
        area,
        subArea,
        authorId,
      },
    })

    res.status(201).json({ message: 'Blog saved' })
  } catch (err) {
    res.status(500).json({ message: 'Sorry, unable to handle request' })
  }
  return null
}
