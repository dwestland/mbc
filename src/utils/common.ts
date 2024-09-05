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

export const findSubareas = (
  camDataStructure: { countries: any[] },
  targetArea: string
) => {
  const subareas: any[] = []
  camDataStructure.countries.forEach((country) => {
    country.states.forEach((state: any) => {
      if (state.areas) {
        state.areas.forEach((area: any) => {
          if (area.area === targetArea) {
            subareas.push(...area.subareas)
          }
        })
      }
    })
  })
  return subareas.length > 0 ? subareas : null
}

export const findAreas = (
  camDataStructure: { countries: any[] },
  targetState: string
) => {
  const areas: any[] = []
  camDataStructure.countries.forEach((country) => {
    country.states.forEach((state: any) => {
      if (state.state === targetState && state.areas) {
        areas.push(...state.areas)
      }
    })
  })
  return areas.length > 0 ? areas : null
}

export const findStates = (
  camDataStructure: { countries: any[] },
  targetCountry: string
) => {
  const states: any[] = []
  camDataStructure.countries.forEach((country) => {
    if (country.country === targetCountry && country.states) {
      states.push(...country.states)
    }
  })
  return states.length > 0 ? states : null
}
