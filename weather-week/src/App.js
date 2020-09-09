import React, {useState} from 'react';
import Header from '../src/components/Header/index';
import Footer from '../src/components/Footer/index';
import WeatherInfo from '../src/components/WeatherInfo/index';

const envVariables = process.env
const {weatherAPIKey} = envVariables

function App() {
  const [weather] = useState([
    {
      name: '',
      temperature: '',
      description: '',
      relativeHumidity: '',
      windSpeed: '',
      icon: ''
    }
  ]);

  const [currentWeather, setCurrentWeather] = useState(weather[0]);

  return (
    <div>
      <Header />
      <WeatherInfo
      weather={weather}
      currentWeather={currentWeather}
      setCurrentWeather={setCurrentWeather}>
      </WeatherInfo>
      <Footer />
    </div>
  );
}

export default App;
