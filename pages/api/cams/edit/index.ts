/* eslint-disable import/no-useless-path-segments */
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const {
    id,
    title,
    webcamUrl,
    imageName,
    description,
    country,
    state,
    area,
    subarea,
    lat,
    lng,
    topCam,
    mbcHosted,
  } = req.body.data

  try {
    await prisma.cams.update({
      where: {
        id,
      },
      data: {
        title,
        webcamUrl,
        imageName,
        description,
        country,
        state,
        area,
        subarea,
        lat,
        lng,
        topCam,
        mbcHosted,
      },
    })

    res.status(200).json({ data: 'resource updated successfully' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ err: 'Error occurred.' })
  }
  return null
}
