import { GetServerSideProps } from 'next'

const Robots = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  const shouldNofollow = process.env.NEXT_PUBLIC_NOFOLLOW === 'true'

  const robotsTxt = shouldNofollow
    ? `# *
User-agent: *
Disallow: /

# Host
Host: ${baseUrl}
`
    : `# *
User-agent: *
Allow: /

Disallow: /youtube
Disallow: /hidden

# Host
Host: ${baseUrl}

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`

  res.setHeader('Content-Type', 'text/plain')
  res.write(robotsTxt)
  res.end()

  return {
    props: {},
  }
}

export default Robots
