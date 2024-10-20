// src/components/EvaluateRule.js
import React, { useState } from "react";
import axios from "axios";

const EvaluateRule = () => {
  const [ruleString, setRuleString] = useState("");
  const [userData, setUserData] = useState({
    age: "",
    department: "",
    salary: "",
    experience: "",
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEvaluate = (e) => {
    e.preventDefault();

    const payload = {
      rule_string: ruleString,
      data: userData,
    };

    axios
      .post("http://localhost:8080/api/rules/evaluate_rule", payload)
      .then((res) => setResult(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Evaluate a Rule</h2>
      <form onSubmit={handleEvaluate}>
        <div>
          <label>Rule String:</label>
          <br />
          <textarea
            value={ruleString}
            onChange={(e) => setRuleString(e.target.value)}
            placeholder="Enter the rule string"
            rows="4"
            cols="50"
          />
        </div>
        <br />
        <div>
          <label>User Data:</label>
          <br />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={userData.age}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={userData.department}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={userData.salary}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={userData.experience}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <button type="submit">Evaluate Rule</button>
      </form>

      {result !== null && (
        <div>
          <h4>Evaluation Result:</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default EvaluateRule;
