import React, { useState, useEffect, useCallback } from "react";
import { fetchWeatherData } from "../services/weatherService";
import WeatherSummary from "./WeatherSummary";
import WeatherAlert from "./WeatherAlert";
import WeatherChart from "./WeatherChart";
import Settings from "./Settings";
import './WeatherDashboard.css';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [threshold, setThreshold] = useState(35); // Default threshold
  const [historicalData, setHistoricalData] = useState([]); // For the chart
  const cities = [
    "Delhi",
    "Mumbai",
    "Chennai",
    "Bangalore",
    "Kolkata",
    "Hyderabad",
    "Pune",
  ];

  const fetchWeather = useCallback(async () => {
    const data = [];
    const newAlerts = [];

    try {
      for (let city of cities) {
        const response = await fetchWeatherData(city);
        const weather = response.data;

        // Convert temperature from Kelvin to Celsius
        const tempCelsius = weather.main.temp - 273.15;
        data.push({
          city: weather.name,
          temp: tempCelsius,
          weather: weather.weather[0].main,
        });

        // Check for alert condition
        if (tempCelsius > threshold) {
          newAlerts.push(
            `ALERT: Temperature in ${weather.name} exceeded ${threshold}°C!`
          );
        }
      }

      setWeatherData(data);

      // Update historical data only if we have weather data
      if (data.length > 0) {
        const avgTemp = data.reduce((sum, w) => sum + w.temp, 0) / data.length;
        setHistoricalData((prevData) => [
          ...prevData,
          { date: new Date().toLocaleDateString(), avgTemp },
        ]);
      }

      setAlerts(newAlerts);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      setAlerts((prev) => [
        ...prev,
        "Error fetching weather data. Please try again later.",
      ]);
    }
  }, [threshold]);

  useEffect(() => {
    const intervalId = setInterval(fetchWeather, 300000); // 5 minutes interval

    fetchWeather(); // Initial fetch on mount

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [fetchWeather]);

  return (
    <div>
      <h1>Real-Time Weather Monitoring</h1>
      <WeatherAlert alerts={alerts} />
      <div className="weather-summaries">
        {weatherData.map((weather, index) => (
          <WeatherSummary key={index} data={weather} />
        ))}
      </div>
      <WeatherChart chartData={historicalData} />
      <Settings threshold={threshold} setThreshold={setThreshold} />
    </div>
  );
};

export default WeatherDashboard;
