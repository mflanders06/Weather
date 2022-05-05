import { Weather } from "../app/weather";

export const WEATHER: Weather = {
    coord: {
        lon: -111,
        lat: 40
    },
    weather: [
        {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d"
        }
    ],
    main: {
        temp: 292.09,
        feels_like: 290.95,
        temp_min: 289.4,
        temp_max: 294.63,
        pressure: 1016,
        humidity: 35
    },
    visibility: 10000,
    wind: {
        speed: 8.75,
        deg: 140
    },
    name: "Sandy City",
}