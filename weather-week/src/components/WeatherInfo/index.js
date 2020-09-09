import React, {useEffect} from 'react';

function WeatherInfo(props)  {

    useEffect(() => {
        document.title = setCurrentWeather.name;
    }, [CurrentWeather]);

    const {
        weather=[],
        setCurrentWeather,
        CurrentWeather
    } = props;

    let city = ''

    const envVariables = process.env
    const {weatherAPIKey} = envVariables

    function handleClick(e)  {
        e.preventDefault();
        fetch("api.openweathermap.org/data/2.5/weather?q="+{city}+"&appid="+process.env.weatherAPIKey)
        .then(response => response.json())
        .then(data => 
            console.log(data))
    }

    return (
        <div>
            <div id='search-container'>
                <span>
                <input htmlFor='search' type='text' placeholder='City'/>
                <input type='submit' value='submit' onClick={(e) => handleClick(e)}></input>
                </span>
            </div>
            <div id='container'>
                <div>

                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;