import { GetServerSideProps } from 'next'
import * as types from '@/utils/types'

const Sitemap = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Get all cams for dynamic routes
  const camsResponse = await fetch(`${process.env.NEXT_PUBLIC_API}/cams-all`)
  const cams: types.Cams[] = await camsResponse.json()

  // Base URL from environment variable
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https:/www.mybeachcams.com'

  // Current date in ISO format for lastmod
  const currentDate = new Date().toISOString()

  // Static routes from your navigation
  const staticRoutes = [
    '',
    '/hawaii',
    '/california',
    '/florida',
    '/world',
    '/aruba',
    '/bermuda',
    '/bonaire',
    '/curacao',
    '/dominican-republic',
    '/jamaica',
    '/japan',
    '/mexico',
    '/new-zealand',
    '/sint-maarten',
    '/st-barts',
    '/taiwan',
    '/thailand',
    '/usa',
    // US States
    '/alabama',
    '/california',
    '/connecticut',
    '/delaware',
    '/florida',
    '/georgia',
    '/hawaii',
    '/louisiana',
    '/maine',
    '/maryland',
    '/massachusetts',
    '/mississippi',
    '/new-hampshire',
    '/new-jersey',
    '/new-york',
    '/north-carolina',
    '/oregon',
    '/rhode-island',
    '/south-carolina',
    '/texas',
    '/washington',
    // Hawaii regions
    '/hawaii/kauai',
    '/hawaii/oahu',
    '/hawaii/maui',
    '/hawaii/bigisland',
    // California regions
    '/california/san-diego',
    '/california/los-angeles',
    '/california/central-coast',
    '/california/san-francisco',
    // Florida regions
    '/florida/miami',
    '/florida/florida-keys',
    '/florida/gulf-coast',
    '/florida/east-central',
    '/florida/panhandle',
    '/florida/northeast',
  ]

  // Create XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticRoutes
        .map(
          (route) => `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${route === '' ? '1.0' : '0.8'}</priority>
        </url>
      `
        )
        .join('')}
      
      ${cams
        .map(
          (cam) => `
        <url>
          <loc>${baseUrl}/detail/${cam.id}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>Weekly</changefreq>
          <priority>0.6</priority>
        </url>
      `
        )
        .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
