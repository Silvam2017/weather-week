import React from 'react';
import Header from '../src/components/Header/index';
import Footer from '../src/components/Footer/index';
import WeatherInfo from '../src/components/WeatherInfo/index';

const envVariables = process.env
const {weatherAPIKey} = envVariables

function App() {

  return (
    <div>
      <Header />
      <WeatherInfo />
      <Footer />
    </div>
  );
}

export default App;
