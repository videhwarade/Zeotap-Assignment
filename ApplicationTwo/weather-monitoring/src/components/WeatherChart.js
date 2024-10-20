import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

// Register scales and other elements
Chart.register(LinearScale, CategoryScale, PointElement, LineElement, Filler);

const WeatherChart = ({ chartData }) => {
  const data = {
    labels: chartData.map((entry) => entry.date),
    datasets: [
      {
        label: "Average Temperature (°C)",
        data: chartData.map((entry) => entry.avgTemp),
        fill: true,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
      x: {
        type: "category", // Ensure x-axis is set as category
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WeatherChart;
