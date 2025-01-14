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
                { subarea: 'LAX' },
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
                { subarea: 'Lake Worth Inlet' },
                { subarea: 'Boca Raton' },
                { subarea: 'Fort Lauderdale' },
                { subarea: 'Hollywood' },
                { subarea: 'Miami Beach' },
              ],
            },
            {
              area: 'Florida Keys',
              subareas: [
                { subarea: 'Key West' },
                { subarea: 'Big Pine Key' },
                { subarea: 'Marathon' },
                { subarea: 'Islamorada' },
                { subarea: 'Plantation Key' },
                { subarea: 'Key Largo' },
              ],
            },
            {
              area: 'Gulf Coast',
              subareas: [
                { subarea: 'Tampa Bay' },
                { subarea: 'Clearwater' },
                { subarea: 'St. Petersburg' },
                { subarea: 'Sarasota' },
                { subarea: 'Fort Myers' },
                { subarea: 'Naples' },
              ],
            },
          ],
        },
        // More states ****************************************************************
        {
          state: 'Alabama',
          areas: [
            { area: 'Gulf Shores' },
            { area: 'Orange Beach' },
            { area: 'Mobile Bay' },
          ],
        },
        {
          state: 'Connecticut',
          areas: [
            { area: 'Westbrook' },
            { area: 'Mystic' },
            { area: 'New London' },
          ],
        },
        {
          state: 'Delaware',
          areas: [
            { area: 'Rehoboth Beach' },
            { area: 'Mispillion Harbor' },
            { area: 'Bethany Beach' },
          ],
        },
        {
          state: 'Georgia',
          areas: [
            { area: 'Tybee Island' },
            { area: 'St. Simons Island' },
            { area: 'Jekyll Island' },
          ],
        },
        {
          state: 'Louisiana',
          areas: [
            { area: 'Grand Isle' },
            { area: 'New Orleans' },
            { area: 'Hale Boggs Bridge' },
          ],
        },
        {
          state: 'Maine',
          areas: [
            { area: 'Ogunquit' },
            { area: 'York' },
            { area: 'Boothbay Harbor ' },
          ],
        },
        {
          state: 'Maryland',
          areas: [
            { area: 'Ocean City' },
            { area: 'Assateague Island' },
            { area: 'Easton' },
          ],
        },
        {
          state: 'Massachusetts',
          areas: [
            { area: 'Cape Cod' },
            { area: 'Newburyport' },
            { area: 'Nahant' },
          ],
        },
        {
          state: 'Minnesota',
          areas: [{ area: 'xxx' }, { area: 'xxx' }, { area: 'xxx' }],
        },
        {
          state: 'Mississippi',
          areas: [
            { area: 'Biloxi' },
            { area: "D'Iberville" },
            { area: 'St. Louis' },
          ],
        },
        {
          state: 'New Hampshire',
          areas: [
            { area: 'Lake Winnipesaukee' },
            { area: 'Portsmouth Harbor' },
            { area: 'Hampton Beach' },
          ],
        },
        {
          state: 'New Jersey',
          areas: [
            { area: 'Atlantic City' },
            { area: 'Ocean City' },
            { area: 'Avalon' },
          ],
        },

        {
          state: 'New York',
          areas: [
            { area: 'New York City' },
            { area: 'Long Island' },
            { area: 'Fire Island' },
            { area: 'Hampton Bays' },
          ],
        },
        {
          state: 'North Carolina',
          areas: [
            { area: 'Outer Banks' },
            { area: 'Wilmington' },
            { area: 'Kitty Hawk' },
          ],
        },
        {
          state: 'Oregon',
          areas: [
            { area: 'Lincoln City' },
            { area: 'Newport' },
            { area: 'Aurora' },
          ],
        },
        {
          state: 'Rhode Island',
          areas: [
            { area: 'Wakefield' },
            { area: 'Newport' },
            { area: 'Narragansett' },
          ],
        },
        {
          state: 'South Carolina',
          areas: [
            { area: 'Myrtle Beach' },
            { area: 'Charleston' },
            { area: 'Pawleys Island' },
            { area: 'Hilton Head Island' },
          ],
        },
        {
          state: 'Texas',
          areas: [
            { area: 'Galveston' },
            { area: 'South Padre Island' },
            { area: 'Corpus Christi' },
            { area: 'Rockport' },
          ],
        },
        {
          state: 'Virginia',
          areas: [{ area: 'xxx' }, { area: 'xxx' }, { area: 'xxx' }],
        },
        {
          state: 'Washington',
          areas: [
            { area: 'Friday Harbor' },
            { area: 'Seattle' },
            { area: 'Port of Kalama' },
            { area: 'Westport' },
          ],
        },
      ],
    },
    // More countries **************************************************************
    {
      country: 'Aruba',
      states: [],
    },
    {
      country: 'Bali',
      states: [],
    },
    {
      country: 'Bermuda',
      states: [],
    },
    {
      country: 'Bonaire',
      states: [],
    },
    {
      country: 'Canada',
      states: [],
    },
    {
      country: 'Costa Rica',
      states: [{ state: 'Tamarindo' }, { state: 'Jaco' }],
    },
    {
      country: 'Curacao',
      states: [],
    },
    {
      country: 'Dominican Republic',
      states: [],
    },
    {
      country: 'Greece',
      states: [],
    },
    {
      country: 'Italy',
      states: [],
    },
    {
      country: 'Jamaica',
      states: [
        { state: 'Kingston' },
        { state: 'Montego Bay' },
        { state: 'Negril' },
      ],
    },
    {
      country: 'Japan',
      states: [],
    },
    {
      country: 'Mexico',
      states: [{ state: 'Cancun' }, { state: 'Baja' }, { state: 'Acapulco' }],
    },
    {
      country: 'Netherlands',
      states: [{ state: 'Zandvoort' }],
    },
    {
      country: 'New Zealand',
      states: [{ state: 'Auckland' }, { state: 'Wellington' }],
    },
    {
      country: 'Portugal',
      states: [],
    },
    {
      country: 'Sint Maarten',
      states: [],
    },
    {
      country: 'Spain',
      states: [],
    },
    {
      country: 'St. Barts',
      states: [],
    },
    {
      country: 'St. Croix',
      states: [],
    },
    {
      country: 'Taiwan',
      states: [],
    },
    {
      country: 'Thailand',
      states: [],
    },
  ],
}

export default data
