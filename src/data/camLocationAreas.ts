const data = {
  countries: [
    {
      country: 'USA',
      states: [
        {
          state: 'Hawaii',
          areas: [
            {
              area: 'Maui',
              subareas: [
                { subarea: 'Kaanapali' },
                { subarea: 'North Shore' },
                { subarea: 'Napili' },
                { subarea: 'Lahaina' },
                { subarea: 'Maui Surf' },
              ],
            },
            {
              area: 'Oahu',
              subareas: [
                { subarea: 'Waikiki' },
                { subarea: 'Honolulu' },
                { subarea: 'Oahu Surf' },
              ],
            },
            {
              area: 'Big Island',
              subareas: [
                { subarea: 'Kona' },
                { subarea: 'Waikoloa Coast' },
                { subarea: 'Observatory Cams' },
                { subarea: 'Volcano Cams' },
                { subarea: 'Big Island Surf' },
              ],
            },
            {
              area: 'Kauai',
              subareas: [
                { subarea: 'Princeville' },
                { subarea: 'Poipu' },
                { subarea: 'Lihue' },
                { subarea: 'Kauai Surf' },
              ],
            },
          ],
        },
        {
          state: 'California',
          areas: [
            {
              area: 'San Diego',
              subareas: [
                { subarea: 'Del Mar' },
                { subarea: 'Mission Bay' },
                { subarea: 'San Diego Surf' },
                { subarea: 'More San Diego' },
              ],
            },
            {
              area: 'Los Angeles',
              subareas: [
                {
                  subarea:
                    'Westside - Venice - Santa Monica - Pacific Palisades',
                },
                { subarea: 'South Bay' },
                { subarea: 'Catalina Island' },
                { subarea: 'Orange County' },
                { subarea: 'Laguna Beach' },
                { subarea: 'Los Angeles Surf' },
              ],
            },
            {
              area: 'Central Coast',
              subareas: [
                { subarea: 'Monterey Bay' },
                { subarea: 'San Luis Obispo' },
                { subarea: 'Santa Barbara' },
                { subarea: 'Central Coast Surf' },
              ],
            },
            {
              area: 'San Francisco',
              subareas: [
                { subarea: 'San Francisco Bay' },
                { subarea: 'Mendocino' },
                { subarea: 'San Francisco Surf' },
              ],
            },
          ],
        },
        {
          state: 'Florida',
          areas: [
            {
              area: 'Panhandle',
              subareas: [
                { subarea: 'Panama City' },
                { subarea: 'St. Teresa' },
                { subarea: 'Pensacola' },
                { subarea: 'Gulf Breeze' },
                { subarea: 'Perdido Key' },
                { subarea: 'Okaloosa Island' },
                { subarea: 'Navarre Beach' },
                { subarea: 'Destin Beach' },
                { subarea: 'Sandestin Beach' },
                { subarea: 'Cape San Blas' },
                { subarea: 'Panhandle Surf' },
              ],
            },
            {
              area: 'Northeast',
              subareas: [
                { subarea: 'St. Augustine' },
                { subarea: 'Jacksonville Beach' },
                { subarea: 'Fernandina Beach' },
                { subarea: 'Ponte Vedra Beach' },
                { subarea: 'Flagler Beach' },
                { subarea: 'Northeast Surf' },
              ],
            },
            {
              area: 'East Central',
              subareas: [
                { subarea: 'Daytona Beach' },
                { subarea: 'New Smyrna Beach' },
                { subarea: 'Sebastian Inlet' },
                { subarea: 'Cocoa Beach' },
                { subarea: 'Vero Beach' },
                { subarea: 'Cape Canaveral' },
                { subarea: 'Ormond Beach' },
                { subarea: 'Jetty Park' },
                { subarea: 'Spanish House' },
                { subarea: 'East Central Surf' },
              ],
            },
            {
              area: 'Miami Beach',
              subareas: [
                { subarea: 'Miami Beach' },
                { subarea: 'South Beach' },
                { subarea: 'Miami Surf' },
              ],
            },
            {
              area: 'South East Florida and The Keys',
              subareas: [
                { subarea: 'Fort Lauderdale' },
                { subarea: 'Fort Pierce Inlet' },
                { subarea: 'Jensen Beach' },
                { subarea: 'Jupiter Inlet' },
                { subarea: 'West Palm Beach' },
                { subarea: 'Lake Worth Inlet' },
                { subarea: 'Boca Raton' },
                { subarea: 'Hollywood Beach' },
                { subarea: 'Florida Keys' },
                { subarea: 'Surf' },
              ],
            },
            {
              area: 'Gulf Coast',
              subareas: [
                { subarea: 'Tampa Bay' },
                { subarea: 'Sarasota' },
                { subarea: 'Fort Myers' },
                { subarea: 'Cape Haze - Charlotte Harbor' },
                { subarea: 'Captiva Island Off of Cape Coral' },
                { subarea: 'Vanderbilt south of Cape Coral' },
                { subarea: 'Naples' },
                { subarea: 'Clearwater' },
                { subarea: 'Gulf Coast Surf' },
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
// console.log(data.countries[2].states[0].areas[0].subareas[0].subarea)

export default data
