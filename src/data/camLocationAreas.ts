interface Subarea {
  subarea: string
}

interface Area {
  area: string
  subareas?: Subarea[]
}

interface State {
  state: string
  areas?: Area[]
}

interface Country {
  country: string
  states?: State[]
}

interface Data {
  countries: Country[]
}

const data: Data = {
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
                { subarea: 'Lahaina' },
                { subarea: 'Kihei' },
                { subarea: 'Kahului' },
              ],
            },
            {
              area: 'Oahu',
              subareas: [
                { subarea: 'Waikiki' },
                { subarea: 'North Shore' },
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
              ],
            },
            {
              area: 'Kauai',
              subareas: [
                { subarea: 'Princeville' },
                { subarea: 'Poipu' },
                { subarea: 'Lihue' },
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
                { subarea: 'San Diego Bay' },
                { subarea: 'Del Mar' },
                { subarea: 'Mission Bay' },
                { subarea: 'San Diego Zoo' },
              ],
            },
            {
              area: 'Los Angeles',
              subareas: [
                {
                  subarea: 'Westside',
                },

                { subarea: 'Santa Monica' },
                { subarea: 'Malibu' },
                { subarea: 'South Bay' },
                { subarea: 'Long Beach' },

                { subarea: 'Catalina Island' },
                { subarea: 'Orange County' },
                { subarea: 'Laguna Beach' },
              ],
            },
            {
              area: 'Central Coast',
              subareas: [
                { subarea: 'Santa Barbara' },
                { subarea: 'Monterey Bay' },
                { subarea: 'Morro Bay' },
                { subarea: 'San Luis Obispo' },
                { subarea: 'Ventura' },
              ],
            },
            {
              area: 'San Francisco',
              subareas: [
                { subarea: 'San Francisco Bay' },
                { subarea: 'Mendocino' },
                { subarea: 'Northern California' },
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
                { subarea: 'Pensacola' },
                { subarea: 'Destin' },
                { subarea: 'Miramar Beach' },
                { subarea: 'Santa Rosa Beach' },
                { subarea: 'Panama City' },
                { subarea: 'Alligator Point' },
              ],
            },
            {
              area: 'Northeast',
              subareas: [
                { subarea: 'Jacksonville Beach' },
                { subarea: 'St. Augustine' },
                { subarea: 'Flagler Beach' },
              ],
            },
            {
              area: 'East Central',
              subareas: [
                { subarea: 'Daytona Beach' },
                { subarea: 'Cape Canaveral' },
                { subarea: 'Melbourne' },
                { subarea: 'Fort Pierce Inlet' },
                { subarea: 'Jensen Beach' },
              ],
            },
            {
              area: 'Miami Beach',
              subareas: [
                { subarea: 'West Palm Beach' },
                { subarea: 'Palm Beach' },
                { subarea: 'Boca Raton' },
                { subarea: 'Fort Lauderdale' },
                { subarea: 'Hollywood' },
                { subarea: 'Miami Beach' },
              ],
            },
            {
              area: 'Florida Keys',
              subareas: [
                { subarea: 'Key Largo' },
                { subarea: 'Plantation Key' },
                { subarea: 'Islamorada' },
                { subarea: 'Marathon' },
                { subarea: 'Big Pine Key' },
                { subarea: 'Key West' },
                { subarea: 'Lake Worth Inlet' },
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
                { subarea: 'Naples' },
              ],
            },
          ],
        },
        {
          state: 'North Carolina',
          areas: [{ area: 'Outer Banks' }, { area: 'Wilmington' }],
        },
        {
          state: 'South Carolina',
          areas: [{ area: 'Myrtle Beach' }, { area: 'Charleston' }],
        },
        {
          state: 'Texas',
          areas: [{ area: 'Galveston' }, { area: 'South Padre Island' }],
        },
        {
          state: 'New York',
          areas: [{ area: 'Long Island' }, { area: 'Fire Island' }],
        },
      ],
    },
    {
      country: 'Mexico',
      states: [{ state: 'Cancun' }, { state: 'Baja' }, { state: 'Acapulco' }],
    },
    {
      country: 'Costa Rica',
      states: [{ state: 'Tamarindo' }, { state: 'Jaco' }],
    },
    {
      country: 'Jamacia',
      states: [{ state: 'Montego Bay' }, { state: 'Negril' }],
    },
  ],
}

// console.log(data.countries[2].country)
// console.log(data.countries[2].states[0].state)
// console.log(data.countries[2].states[0].areas[0].area)
// console.log(data.countries[2].states[0].areas[0].subareas[0].subarea)

export default data
