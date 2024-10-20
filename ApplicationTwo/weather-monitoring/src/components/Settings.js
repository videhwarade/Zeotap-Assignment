import React, { useState } from "react";

const Settings = ({ threshold, setThreshold }) => {
  const [newThreshold, setNewThreshold] = useState(threshold);

  const handleSave = () => {
    setThreshold(newThreshold);
    alert(`Alert threshold set to ${newThreshold}°C`);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <label>
        Temperature Alert Threshold (°C):
        <input
          type="number"
          value={newThreshold}
          onChange={(e) => setNewThreshold(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Settings;
