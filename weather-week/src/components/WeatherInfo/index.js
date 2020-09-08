import React from 'react';

function WeatherInfo (props)  {

    var city = props

    const envVariables = process.env
    const {weatherAPIKey} = envVariables

    function handleClick(e)  {
        e.preventDefault();
        fetch("api.openweathermap.org/data/2.5/weather?q="+{city}+"&appid="+process.env.weatherAPIKey)
        .then(function(response) {
            response.json().then(function(data) {
                console.log(data);
                })
            })
    }

    return (
        <div>
            <div id='search-container'>
                <form>
                <input htmlFor='search' type='text' placeholder='City'/>
                <button type='submit' value='submit' onClick={(e) => handleClick(e)}></button>
                </form>
            </div>
            <div id='container'>
                <div>

                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;