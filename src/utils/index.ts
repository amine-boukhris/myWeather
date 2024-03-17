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
