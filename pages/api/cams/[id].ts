import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const { pid } = req.query

  console.log('%c req.query.id ', 'background: red; color: white', req.query.id)

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const cams = await prisma.cams.findUnique({
      where: {
        id: +req.query.id,
      },
      select: {
        id: true,
        title: true,
        // slug: true,
        webcamUrl: true,
        oldImageUrl: true,
        description: true,
        country: true,
        state: true,
        area: true,
        subArea: true,

        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })
    res.status(200).json({ cams })
  } catch (err) {
    console.log(err)
    res.status(403).json({ err: 'Error occurred.' })
  }
  return null
}
