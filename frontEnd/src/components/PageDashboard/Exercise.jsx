import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Exercise = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  const navigate = useNavigate();
  const calculateBmi = () => {
    setErrorMessage("");
    if (!weight || !height) {
      setErrorMessage("Please enter both weight and height.");
      return;
    }
    if (weight <= 0 || height <= 0) {
      setErrorMessage("Weight and height must be positive values.");
      return;
    }
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    if (bmiValue < 18.5) {
      navigate("/u-e"); 
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      navigate("/n-e"); 
    } else {
      navigate("/o-e"); 
    }
  };
  return (
    <div>
      <h1>Welcome to the Exercise Page</h1>
      <p>Find the best workout routine based on your body type and goals.</p>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBmi}>Get Exercise Plan</button>
    </div>
  );
};
export default Exercise;
