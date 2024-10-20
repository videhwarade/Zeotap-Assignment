import React from "react";

const WeatherAlert = ({ alerts }) => {
  return (
    <div className="weather-alerts">
      {alerts.length > 0 ? (
        alerts.map((alert, index) => (
          <p key={index} className="alert">
            {alert}
          </p>
        ))
      ) : (
        <p>No alerts triggered.</p>
      )}
    </div>
  );
};

export default WeatherAlert;
