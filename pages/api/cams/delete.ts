import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'
import { getSession } from 'next-auth/react'

const getCams = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: any = await getSession({ req })
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { id } = req.body.data

  if (session?.user.role === 'ADMIN') {
    try {
      await prisma.cams.delete({
        where: {
          id: +id,
        },
      })

      res.status(200).json({ message: 'Cam deleted' })
    } catch (err) {
      res.status(500).json({ message: 'Sorry, unable to handle request' })
    }
  } else {
    res.statusCode = 401
    res.end(`Unauthorized`)
  }

  return null
}

export default getCams
