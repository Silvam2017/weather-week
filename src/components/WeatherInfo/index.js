import React, {useState} from 'react';

function WeatherInfo()  {

    const apiKey='7aeefed14e670086fed17e50b13e3bf5'

    const [
        query,
        setQuery
     ] = useState('');

    const [
        CurrentWeather,
        setCurrentWeather
     ] = useState({});

    const search = event => {
        if (event.key === 'Enter') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${apiKey}`)
            .then(response => response.json())
            .then(response => {
              setCurrentWeather(response);
              setQuery('');
            });
        }
    }

    return (
        <div>
            <div id='search-container'>
                    <input 
                    type="text"
                    className="search-bar"
                    placeholder="Enter City Name"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
            </div>
            {(typeof CurrentWeather.main != 'undefined' ? (
                <div id='container'>
                    <div className='location'>
                        <div className='city'>{CurrentWeather.name}, {CurrentWeather.sys.country}</div>
                    </div>
                    <div className='weather'>
                    <div className='icon'>
                            <img 
                                src={`http://openweathermap.org/img/wn/10d@2x.png`} alt='weather icon'
                                className='weather-icon'
                                id='icon-img'
                            />
                        </div>
                        <div className='temp'>Temperature: {Math.round(CurrentWeather.main.temp)}°F</div>
                        <div className='feel'>Feels Like: {Math.round(CurrentWeather.main.feels_like)}°F</div>
                        <div className='description'>Description: {CurrentWeather.weather[0].main}</div>
                        <div className='humid'>Relative Humidity: {CurrentWeather.main.humidity}%</div>
                        <div className='wind'>Wind Speed: {Math.round(CurrentWeather.wind.speed)}mph</div>
                    </div>
                </div>
            ) : (''))}
        </div>
    )
}

export default WeatherInfo;

/*
    const [formState, setFormState] = useState({city: ''});
    const [errorMessage, setErrorMessage] = useState('');

    if (e.target.name === 'city') {
        const isCity = e.target.value;
        console.log(isCity);
        if(!isCity) {
            setErrorMessage('No City Selected');
        } else {
            setErrorMessage('');
        }
    }

    if(!isCity) {
        setErrorMessage('No City Selected');
    } else {
        setErrorMessage('');
    }

    const apiKey='7aeefed14e670086fed17e50b13e3bf5'

    const [
        query,
        setQuery
     ] = useState('');

    const [
        CurrentWeather,
        setCurrentWeather
     ] = useState({});

    const search = event => {
        if (event.key === 'Enter') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${apiKey}`)
            .then(response => response.json())
            .then(response => {
              setCurrentWeather(response);
              setQuery('');
            });
        }
    }

    return (
        {errorMessage && (
            <div>
            <div id='search-container'>
                    <input 
                    type="text"
                    className="search-bar"
                    placeholder="Enter City Name"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
            </div>
            {(typeof CurrentWeather.main != 'undefined' ? (
                <div id='container'>
                    <div className='location'>
                        <div className='city'>{CurrentWeather.name}, {CurrentWeather.sys.country}</div>
                    </div>
                    <div className='weather'>
                    <div className='icon'>
                            <img 
                                src={`http://openweathermap.org/img/wn/10d@2x.png`} alt='weather icon'
                                className='weather-icon'
                                id='icon-img'
                            />
                        </div>
                        <div className='temp'>Temperature: {Math.round(CurrentWeather.main.temp)}°F</div>
                        <div className='feel'>Feels Like: {Math.round(CurrentWeather.main.feels_like)}°F</div>
                        <div className='description'>Description: {CurrentWeather.weather[0].main}</div>
                        <div className='humid'>Relative Humidity: {CurrentWeather.main.humidity}%</div>
                        <div className='wind'>Wind Speed: {Math.round(CurrentWeather.wind.speed)}mph</div>
                    </div>
                </div>
            ) : (''))}
        </div>
        )}
        {!errorMessage && (
            <div>
            <div id='search-container'>
                    <input 
                    type="text"
                    className="search-bar"
                    placeholder="Enter City Name"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
            </div>
            {(typeof CurrentWeather.main != 'undefined' ? (
                <div id='container'>
                    <div className='location'>
                        <div className='city'>{CurrentWeather.name}, {CurrentWeather.sys.country}</div>
                    </div>
                    <div className='weather'>
                    <div className='icon'>
                            <img 
                                src={`http://openweathermap.org/img/wn/10d@2x.png`} alt='weather icon'
                                className='weather-icon'
                                id='icon-img'
                            />
                        </div>
                        <div className='temp'>Temperature: {Math.round(CurrentWeather.main.temp)}°F</div>
                        <div className='feel'>Feels Like: {Math.round(CurrentWeather.main.feels_like)}°F</div>
                        <div className='description'>Description: {CurrentWeather.weather[0].main}</div>
                        <div className='humid'>Relative Humidity: {CurrentWeather.main.humidity}%</div>
                        <div className='wind'>Wind Speed: {Math.round(CurrentWeather.wind.speed)}mph</div>
                    </div>
                </div>
            ) : (''))}
        </div>
        )}
    )
*/