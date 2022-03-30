import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const { pid } = req.query

  //   console.log('%c req.query.id ', 'background: red; color: white', req.query.id)

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

    res.status(200).json({ data: 'resource updated successfully' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ err: 'Error occurred.' })
  }
  return null
}
