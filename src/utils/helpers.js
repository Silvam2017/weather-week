const envVariables = process.env
const {weatherAPIKey} = envVariables

function cityFetch () {
fetch('api.openweathermap.org/data/2.5/weather?q=' + {city} + '&appid=' + process.env.weatherAPIKey')
  .then(response => response.json())
};