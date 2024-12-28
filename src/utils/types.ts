export interface CamPageProps {
  cams: {}[]
  totalCams: number
}

export interface CamsPageProps2 {
  cams: Cams[]
  error?: string
}

export interface Cams {
  area: string
  country: string
  description: string
  hidden: boolean
  id: number
  imageName: string
  lat: number
  lng: number
  longDescription: string
  mbcHostedYoutube: boolean
  moreCams: string
  postalCode: string
  state: string
  subarea: string
  title: string
  titleSlug: string
  topCam: boolean
  youtubeId: string
  webcamUrl: string
}

export interface WebcamProps {
  cams: [
    {
      area: string
      country: string
      description: string
      hidden: boolean
      id: string
      imageName: string
      lat: number
      lng: number
      longDescription: string
      mbcHostedYoutube: boolean
      moreCams: string
      postalCode: string
      state: string
      subarea: string
      title: string
      titleSlug: string
      topCam: boolean
      youtubeId: string
      webcamUrl: string
    }
  ]
  moreCams: { title: string }[]
}

export interface MoreWebcamProps {
  cams: {
    cams: Cams[] // Changed from tuple type to array type
  }
}
