import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await prisma.cams.findMany({
      orderBy: [{ topCam: 'desc' }],
      where: {
        NOT: {
          hidden: true,
        },
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
        mbcHostedYoutube: true,
        state: true,
        subarea: true,
        title: true,
        topCam: true,
        webcamUrl: true,
      },
    })

    // Send the records as a JSON response
    res.status(200).json(data)
  } catch (error) {
    // Handle any errors
    console.error('Error fetching cams:', error)
    res.status(500).json({ error: 'An error occurred while fetching cams' })
  } finally {
    await prisma.$disconnect()
  }
}
