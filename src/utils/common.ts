export function renderError() {
  return `<Layout
      documentTitle="Error - Beach Cams"
      documentDescription="An error occurred while loading the webcams."
    >
      <div className="layout">
        <h1>Error Loading Webcams</h1>
        <p>There was an error loading the webcams. Please try again later.</p>
      </div>
    </Layout>`
}

export function slugify(string: string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export function getSixDigitRandom() {
  return Math.random().toString().substring(2, 8)
}
