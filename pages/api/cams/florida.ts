import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const cams = await prisma.cams.findMany({
        where: {
          state: 'FL',
        },
        select: {
          id: true,
          title: true,
          webcamUrl: true,
          description: true,
          country: true,
          state: true,
          area: true,
          subarea: true,
        },
      })
      res.status(200).json({ cams })
    } catch (err) {
      console.log(err)
      res.status(403).json({ err: 'Error occurred.' })
    }
    return null
  }

  return res.status(405).json({ message: 'Method not allowed' })
}
