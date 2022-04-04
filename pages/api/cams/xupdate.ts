import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const {
    id,
    title,
    slug,
    webcamUrl,
    imageUrl,
    imageName,
    oldImageUrl,
    description,
    country,
    state,
    area,
    subarea,
    lat,
    lng,
  } = req.body.data

  try {
    await prisma.cams.update({
      where: {
        id,
      },
      data: {
        title,
        slug,
        webcamUrl,
        imageUrl,
        imageName,
        oldImageUrl,
        description,
        country,
        state,
        area,
        subarea,
        lat,
        lng,
      },
    })

    res.status(200).json({ message: 'Cam has been updated' })
  } catch (err) {
    res.status(500).json({ message: 'Sorry, unable to handle request' })
  }
  return null
}
