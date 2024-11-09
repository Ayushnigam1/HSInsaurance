export interface Link {
    title: string,
    link: string,
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