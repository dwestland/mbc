import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
        webcamUrl: true,
        imageName: true,
        description: true,
        country: true,
        state: true,
        area: true,
        subarea: true,
        lat: true,
        lng: true,
        topCam: true,
        mbcHosted: true,
      },
    })
    res.status(200).json({ cams })
  } catch (err) {
    console.log(err)
    res.status(403).json({ err: 'Error occurred.' })
  }
  return null
}
