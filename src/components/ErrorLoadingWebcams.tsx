import Layout from '@/components/Layout'
import Link from 'next/link'

const ErrorLoadingWebcams = () => (
  <Layout
    documentTitle="Error - Beach Cams"
    documentDescription="An error occurred while loading the webcams."
  >
    <div className="layout">
      <h1>Error Loading Webcams</h1>
      <p>There was an error loading the webcams. Please try again later.</p>
      <p>
        You can go back to the <Link href="/">homepage</Link> or try refreshing
        the page.
      </p>
    </div>
  </Layout>
)

export default ErrorLoadingWebcams
