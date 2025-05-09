export const ForecastItem = (props) => {

    const { forecast, convertDate } = props

    const IconWeather = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`

    return (
        <div
            key={forecast.dt}
            className="bg-[#87878715] rounded-md flex flex-col items-center gap-1 p-3 border-2 border-[#87878727]"
        >
            <span className="font-light text-md capitalize">
                {convertDate(forecast)}
            </span>

            <img
                width={100}
                src={IconWeather}
                className="hover:animate-pulse"
            />

            <span className="capitalize font-semibold">
                {forecast.weather[0].description}
            </span>

            <p>min: {Math.round(forecast.main.temp_min)}ºC / máx: {Math.round(forecast.main.temp_max)}ºC</p>
        </div>
    )
}