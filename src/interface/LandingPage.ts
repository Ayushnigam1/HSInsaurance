export interface Link {
    title: string,
    url: string,
    type: 'instagram' | 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube'
}

export interface LandingData{
    heading:string,
    subheading:string,
    bannerimage:string,
    backgroundimage:string,
    phone: string,
    email: string
    links: Link[]
}