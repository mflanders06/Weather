/*
    This is the template structure of the api call to
    https://api.openweathermap.org/data/2.5/onecall
    (excluding minutely and hourly)
*/

export interface OneCall {
    lat: number,
    lon: number,
    current: {
        temp: number,
        feels_like: number,
        wind_speed: number,
        weather: Forcast[]
    },
    daily: Daily[]
}

interface Forcast {
    id: number,
    main: string,
    description: string,
    icon: any
}

interface Daily {
    temp: {
        max: number,
        min: number
    },
    wind_speed: number,
    weather: Forcast[]

}