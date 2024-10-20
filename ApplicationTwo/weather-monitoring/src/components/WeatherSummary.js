import React from 'react';
import './WeatherSummary.css';

const WeatherSummary = ({ data }) => {
  // Map weather condition to an icon
  const weatherIcons = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    Snow: '❄️',
    // Add more conditions as needed
  };

  return (
    <div className="weather-summary">
      <h2>{data.city}</h2>
      <p>{weatherIcons[data.weather] || '🌈'}</p> {/* Default icon if not found */}
      <p>Temperature: {data.temp.toFixed(2)} °C</p>
      <p>Condition: {data.weather}</p>
    </div>
  );
};

export default WeatherSummary;
