import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

const getCams = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { page = 1, limit = 8 } = req.query
      const pageNum = parseInt(page as string, 10)
      const limitNum = parseInt(limit as string, 10)

      const cams = await prisma.cams.findMany({
        orderBy: [{ updatedAt: 'desc' }],
        where: {
          mbcHostedYoutube: true,
          hidden: false,
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
          youtubeId: true,
          updatedAt: true,
        },
        skip: (pageNum - 1) * limitNum,
        take: limitNum,
      })

      const totalCams = await prisma.cams.count({
        where: {
          mbcHostedYoutube: true,
          hidden: false,
        },
      })

      res.status(200).json({ cams, totalCams })
    } catch (err) {
      console.log(err)
      res.status(403).json({ err: 'Error occurred.' })
    }
    return null
  }

  return res.status(405).json({ message: 'Method not allowed' })
}

export default getCams
