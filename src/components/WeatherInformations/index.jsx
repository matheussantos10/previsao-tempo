import { useState } from "react"

export const WeatherInformations = (props) => {

    const { weather, flagURL } = props
    const [isFlagLoad, setIsFlagLoad] = useState(false)

    const IconWeather = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    const img = new Image
    img.src = flagURL
    img.onload = () => {
        setIsFlagLoad(true)
    }

    return (
        <section
            className="w-4/5 flex flex-col items-center gap-3 rounded-2xl py-5 flex-wrap shadow-xl
            bg-[rgba(255,255,255,0.75)] "
        >
            <div className="flex flex-wrap gap-3 items-center">
                <h2 className="text-4xl font-bold">
                    {weather.name}
                </h2>

                {isFlagLoad && <img src={flagURL} alt="Bandeira do país" />}
            </div>

            <div className="flex w-1/2 justify-evenly items-center flex-wrap gap-2 mb-3">
                <p className="text-2xl capitalize">
                    {weather.weather[0].description}
                </p>

                <div className="flex flex-col flex-wrap text-center">
                    <img src={IconWeather} className="hover:animate-pulse" />
                    <p className="text-xl">
                        {Math.round(weather?.main.temp)}ºC
                    </p>
                </div>
            </div>

            <div className="flex w-1/2 justify-between flex-wrap gap-5 underline">
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}hPa</p>
            </div>
        </section>
    )
}