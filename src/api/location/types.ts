export interface IVersionDetail {
    max_chance: number,
    version: {
        name: string,
        url: string
    }
}

export interface ILocation {
        location_area: {
            name: string,
            url: string,
        },
        version_details: IVersionDetail[]
}