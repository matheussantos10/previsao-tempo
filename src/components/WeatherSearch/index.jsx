import SearchIcon from '@mui/icons-material/Search';

export const WeatherSearch = (props) => {

    const { inputRef, searchCity } = props

    return (
        <section className="flex flex-col gap-3 items-center mt-10">

            <h1 className='text-4xl font-bold text-white'>
                Previsão do tempo
            </h1>

            <div className='rounded-xl bg-[rgba(255,255,255,0.75)] pl-2 flex shadow-xl'>
                <input
                    type='text'
                    ref={inputRef}
                    placeholder='digite o nome da cidade'
                    className="text-black outline-none px-2 py-2 text-lg border-r-[#45444415] border-r-2 "
                />
                <button
                    onClick={searchCity}
                    className="cursor-pointer px-3 ease-in duration-150
                    hover:scale-130
                    active:scale-100"
                >
                    <SearchIcon />
                </button>
            </div>
        </section>
    )
}