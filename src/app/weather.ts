

export interface Weather {
    coord: {
        lon: number,
        lat: number
    },
    weather: Forcast[]
    ,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number,
    },
    name: string

}

interface Forcast {
    id: number,
    main: string,
    description: string,
    icon: any
}