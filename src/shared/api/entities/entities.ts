export type orderBy = "popularity" | "nearby"

export interface Base {
    timestamp: string
}

export interface EventsRequest {
    interests: string
    dateMin: Date
    dateMax: Date
    orderBy: orderBy
    lat?: number
    lon?: number
}

export interface Photo {
    preview: string
    album: string[]
}

export interface Location {
    place: string
    coords: number[]
}

export interface Events {
    id: string,
    title: string,
    schedule: string[][],
    location: Location,
    announced: string,
    updated: string,
    photo: Photo
}

export interface EventsResponse extends Base {
    events: Events
}


export interface InterestsResponse extends Base {
    interests: string[]
}

export interface InterestsRequest {
    search: string
}