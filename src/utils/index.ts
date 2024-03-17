import config from '../config'
const apiKey = config.apiKey;


export const fetchCityData = async (city: string) => {
    const cityName = city.replace(/ /g, "%20")
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${apiKey}`
        const response = await fetch(url)
        const data = await response.json()
        const statusCode = data.cod;
        if (statusCode == "200") {
            const temprature: string = data.main.temp.toFixed(0)
            const humidity: string = data.main.humidity.toFixed(0)
            const wind: string = data.wind.speed.toFixed(1)
            const pressure: string = data.main.pressure.toFixed(0)
            const weatherState: string = data.weather[0].main
            return { statusCode, temprature, humidity, wind, pressure, weatherState }
        } else {
            return { statusCode }
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

// const data = {
    //     coord: { lon: -80.1937, lat: 25.7743 },
    //     weather: [
    //         {
    //             id: 803,
    //             main: "Clouds",
    //             description: "broken clouds",
    //             icon: "04d",
    //         },
    //     ],
    //     base: "stations",
    //     main: {
    //         temp: 29.05,
    //         feels_like: 32.65,
    //         temp_min: 27.79,
    //         temp_max: 30.57,
    //         pressure: 1016,
    //         humidity: 69,
    //     },
    //     visibility: 10000,
    //     wind: { speed: 4.12, deg: 190 },
    //     clouds: { all: 75 },
    //     dt: 1710606475,
    //     sys: {
    //         type: 2,
    //         id: 2009435,
    //         country: "US",
    //         sunrise: 1710588508,
    //         sunset: 1710631807,
    //     },
    //     timezone: -14400,
    //     id: 4164138,
    //     name: "Miami",
    //     cod: 200,
    // };
