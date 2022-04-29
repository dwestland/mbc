import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '.prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Remove extra spaces and add AND operator
  const query = req.body.search.term
    .trim()
    .replace(/ +(?= )/g, '')
    .split(' ')
    .join(' & ')

  try {
    const cams = await prisma.$queryRaw(
      Prisma.sql`select id, title, country, state, area, subarea, description 
        from cams
        where to_tsvector(
          title || ' ' || 
          description || ' ' || 
          country || ' ' || 
          state || ' ' || 
          area || ' ' || 
          subarea
        ) @@ to_tsquery(${query});`
    )
    res.status(200).json({ cams })
  } catch (err) {
    console.log(err)
    res.status(403).json({ err: 'Error occurred.' })
  }
  return null
}
