import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

const getCams = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const cams = await prisma.cams.findMany({
        orderBy: [{ topCam: 'desc' }],
        where: {
          state: 'NC',
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
          lat: true,
          lng: true,
          topCam: true,
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

export default getCams
