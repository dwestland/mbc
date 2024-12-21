import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

const getCams = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const cams = await prisma.cams.findMany({
        orderBy: [{ topCam: 'desc' }],
        where: {
          NOT: {
            hidden: true,
          },
          state: 'Florida',
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
