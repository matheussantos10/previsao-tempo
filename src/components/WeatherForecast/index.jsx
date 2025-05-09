import { ForecastItem } from "./ForecastItem"

export const WeatherForecast = (props) => {

    const { weatherForecast, lastUpdate } = props

    let dailyForecast = {}

    for (let forecast of weatherForecast.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const nextFiveDays = Object.values(dailyForecast).slice(1, 6)

    const convertDate = (date) => {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: "2-digit" })
        return newDate
    }


    return (
        <section className="w-4/5 flex flex-col items-center gap-5 rounded-2xl p-5 bg-[rgba(255,255,255,0.75)] flex-wrap shadow-xl ">
            <h1 className="text-2xl mb-3" >Previsão próximos 5 dias</h1>

            <div className="w-full flex justify-between flex-wrap gap-5">
                {nextFiveDays.map(forecast => (
                    <ForecastItem forecast={forecast} convertDate={convertDate} />
                ))}
            </div>

            <div className="w-full text-end text-sm">
                <p>
                    <span>Ultima atualização: </span>
                    {lastUpdate}
                </p>
            </div>
        </section>
    )
}