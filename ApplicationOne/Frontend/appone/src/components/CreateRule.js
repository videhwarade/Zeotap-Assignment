// src/components/CreateRule.js
import React, { useState } from "react";
import axios from "axios";

const CreateRule = () => {
  const [ruleString, setRuleString] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/rules/create_rule", {
        rule_string: ruleString,
      })
      .then((res) => {
        setResponse(res.data);
        setRuleString(""); // Reset the rule input
      })
      .catch((err) => {
        console.error(err);
        setResponse("Error creating rule.");
      });
  };

  return (
    <div>
      <h2>Create a Rule</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          placeholder="Enter your rule here..."
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Create Rule</button>
      </form>

      {response && (
        <div>
          <h4>Response:</h4>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CreateRule;
