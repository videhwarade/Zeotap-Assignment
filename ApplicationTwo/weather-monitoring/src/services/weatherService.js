import axios from 'axios';

// Base URL and API key for OpenWeatherMap
const API_KEY = '12ef1eb5d00ae7058d34ce592356a878'; // Replace with your API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Fetch weather data for a specific city
export const fetchWeatherData = (city) => {
  return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
};
