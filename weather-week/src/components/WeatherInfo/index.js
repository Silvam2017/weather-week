import React from 'react';

function WeatherInfo ()  {

    const envVariables = process.env
    const {weatherAPIKey} = envVariables

    var getCityWeather = function() {
    fetch("api.openweathermap.org/data/2.5/weather?q="+{city}+"&appid="+process.env.weatherAPIKey)
    .then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            })
        })
    };

    return (
        <div>
            Weather
        </div>
    )
}

export default WeatherInfo;