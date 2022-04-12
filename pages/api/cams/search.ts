import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  console.log(
    '%c req.body.search.term ',
    'background: red; color: white',
    req.body.search.term
  )

  try {
    const cams = await prisma.cams.findMany({
      where: {
        description: { contains: req.body.search.term, mode: 'insensitive' },

        // title: { contains: req.body.search.term, mode: 'insensitive' },
      },
    })

    res.status(200).json({ cams })
  } catch (err) {
    console.log(err)
    res.status(403).json({ err: 'Error occurred.' })
  }
  return null
}
