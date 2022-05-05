

export interface FiveDay {
    city:{
        name: string,
        coord: {
            lon: number,
            lat: number
        }
    },
    list: EachDay[]
}

interface EachDay {
    temp:{
        min: number,
        max: number
    },
    weather: Forcast[]
}

interface Forcast {
    id: number,
    main: string,
    description: string,
    icon: any
}