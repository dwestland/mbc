export interface CamPageProps {
  cams: {}[]
}

export interface Cams {
  id: number
  title: string
  webcamUrl: string
  imageName: string
  description: string
  country: string
  state: string
  area: string
  subarea: string
  lat: number
  lng: number
  topCam: boolean
  mbcHosted: boolean
}

export interface WebcamProps {
  cams: [
    {
      id: number
      title: string
      webcamUrl: string
      imageName: string
      description: string
      country: string
      state: string
      area: string
      subarea: string
      lat: number
      lng: number
      topCam: boolean
      mbcHosted: boolean
    }
  ]
  moreCams: { title: string }[]
}
