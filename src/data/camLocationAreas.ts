const data = {
  countries: [
    {
      country: 'USA',
      states: [
        {
          state: 'HI',
          areas: [
            {
              area: 'Maui',
              subAreas: [
                { subArea: 'Kaanapali' },
                { subArea: 'North Shore' },
                { subArea: 'Napili' },
                { subArea: 'Lahaina' },
                { subArea: 'Maui Surf' },
              ],
            },
            {
              area: 'Oahu',
              subAreas: [
                { subArea: 'Waikiki' },
                { subArea: 'Honolulu' },
                { subArea: 'Oahu Surf' },
              ],
            },
            {
              area: 'Big Island',
              subAreas: [
                { subArea: 'Kona' },
                { subArea: 'Waikoloa Coast' },
                { subArea: 'Observatory Cams' },
                { subArea: 'Volcano Cams' },
              ],
            },
            {
              area: 'Kauai',
              subAreas: [
                { subArea: 'Princeville' },
                { subArea: 'Poipu' },
                { subArea: 'Lihue' },
              ],
            },
          ],
        },
        {
          state: 'CA',
          areas: [
            {
              area: 'San Diego',
              subAreas: [
                { subArea: 'Del Mar' },
                { subArea: 'Mission Bay' },
                { subArea: 'San Diego Surf' },
                { subArea: 'More San Diego' },
              ],
            },
            {
              area: 'Los Angeles',
              subAreas: [
                {
                  subArea:
                    'Westside - Venice - Santa Monica - Pacific Palisades',
                },
                { subArea: 'South Bay' },
                { subArea: 'Catalina Island' },
                { subArea: 'Orange County' },
                { subArea: 'Laguna Beach' },
                { subArea: 'Los Angeles' },
              ],
            },
            {
              area: 'Central Coast',
              subAreas: [
                { subArea: 'Monterey Bay' },
                { subArea: 'San Luis Obispo' },
                { subArea: 'Santa Barbara' },
                { subArea: 'Central Coast Surf Cams' },
              ],
            },
            {
              area: 'San Francisco',
              subAreas: [
                { subArea: 'San Francisco Bay' },
                { subArea: 'Mendocino' },
                { subArea: 'San Francisco Surf Cams' },
              ],
            },
          ],
        },
        {
          state: 'FL',
          areas: [
            {
              area: 'Panhandle',
              subAreas: [
                { subArea: 'Panama City' },
                { subArea: 'St. Teresa' },
                { subArea: 'Pensacola' },
                { subArea: 'Gulf Breeze' },
                { subArea: 'Perdido Key' },
                { subArea: 'Okaloosa Island' },
                { subArea: 'Navarre Beach' },
                { subArea: 'Destin Beach' },
                { subArea: 'Sandestin Beach' },
                { subArea: 'Cape San Blas' },
              ],
            },
            {
              area: 'Northeast',
              subAreas: [
                { subArea: 'St. Augustine' },
                { subArea: 'Jacksonville Beach' },
                { subArea: 'Fernandina Beach' },
                { subArea: 'Ponte Vedra Beach' },
                { subArea: 'Flagler Beach' },
              ],
            },
            {
              area: 'East Central',
              subAreas: [
                { subArea: 'Daytona Beach' },
                { subArea: 'New Smyrna Beach' },
                { subArea: 'Sebastian Inlet' },
                { subArea: 'Cocoa Beach' },
                { subArea: 'Vero Beach' },
                { subArea: 'Cape Canaveral' },
                { subArea: 'Ormond Beach' },
                { subArea: 'Jetty Park' },
                { subArea: 'Spanish House' },
              ],
            },
            {
              area: 'Miami Beach',
              subAreas: [
                { subArea: 'Miami Beach' },
                { subArea: 'South Beach' },
              ],
            },
            {
              area: 'South East Florida and The Keys',
              subAreas: [
                { subArea: 'Fort Lauderdale' },
                { subArea: 'Fort Pierce Inlet' },
                { subArea: 'Jensen Beach' },
                { subArea: 'Jupiter Inlet' },
                { subArea: 'West Palm Beach' },
                { subArea: 'Lake Worth Inlet' },
                { subArea: 'Boca Raton' },
                { subArea: 'Hollywood Beach' },
                { subArea: 'Florida Keys' },
              ],
            },
            {
              area: 'Gulf Coast',
              subAreas: [
                { subArea: 'Tampa Bay' },
                { subArea: 'Sarasota' },
                { subArea: 'Fort Myers' },
                { subArea: 'Cape Haze - Charlotte Harbor' },
                { subArea: 'Captiva Island Off of Cape Coral' },
                { subArea: 'Vanderbilt south of Cape Coral' },
                { subArea: 'Naples' },
                { subArea: 'Clearwater' },
              ],
            },
          ],
        },
        {
          state: 'NC',
          areas: [],
        },
      ],
    },
    { country: 'MEX', states: [] },
    { country: 'CAN', states: [] },
  ],
}

// console.log(data.countries[2].country)
// console.log(data.countries[2].states[0].state)
// console.log(data.countries[2].states[0].areas[0].area)
// console.log(data.countries[2].states[0].areas[0].subAreas[0].subArea)

export default data
