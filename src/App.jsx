/** React */
import { useState, useRef } from 'react'
/** Library */
import axios from 'axios'
import moment from "moment";
import "moment/locale/pt-br";
import 'moment/dist/locale/pt-br'
import Swal from 'sweetalert2';
/** Components */
import { Links } from './components/Links'
import { WeatherSearch } from './components/WeatherSearch'
import { WeatherForecast } from './components/WeatherForecast'
import { WeatherInformations } from './components/WeatherInformations'
/** API */
import { keyAPI } from './api/key';

function App() {

    moment.locale('pt-br')

    const [weather, setWeather] = useState()
    const [weatherForecast, setWeatherForecast] = useState()
    const [lastUpdate, setLastUpdate] = useState()
    const [flagURL, setFlagURL] = useState()
    const inputRef = useRef()

    const searchCity = async () => {
        const city = inputRef.current.value
        const key = keyAPI
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

        const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

        const _apiInfo = await axios.get(url)
            .then(resp => {
                setWeather(resp.data)
                getFlag(resp.data.sys.country)
            })
            .catch(err => {
                console.log(err.status)
                err.status === 404 && Swal.fire({
                    icon: 'error',
                    confirmButtonText: 'Fechar',
                    confirmButtonColor: '#b31e2f',
                    title: 'Cidade não encontrada!'
                })
                err.status === 500 && Swal.fire({
                    icon: 'error',
                    confirmButtonText: 'Fechar',
                    confirmButtonColor: '#b31e2f',
                    title: 'Erro na consulta, tente novamente mais tarde!'
                })
            })

        const _apiInfoForecast = await axios.get(url5Days)
            .then(resp => {
                setWeatherForecast(resp.data)
            })

        getMoment()
    }

    const getFlag = (infoCountry) => {
        const country = infoCountry.toLowerCase()
        setFlagURL(`https://flagcdn.com/w40/${country}.png`)
    }

    const getMoment = () => {
        const dateNow = moment().format('L - LT')
        setLastUpdate(dateNow)
    }

    return (
        <div className='flex flex-col items-center gap-8 h-screen'>
            <Links />

            <WeatherSearch
                inputRef={inputRef}
                searchCity={searchCity}
            />

            {weather && <WeatherInformations weather={weather} flagURL={flagURL} />}

            {weatherForecast && <WeatherForecast weatherForecast={weatherForecast} lastUpdate={lastUpdate} />}
        </div>

    )
}

export default App
