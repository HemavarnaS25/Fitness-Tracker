import React, { useState } from "react";
const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const calculateBmi = () => {
    if (!weight || !height) {
      alert("Please enter both weight and height.");
      return;
    }
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
setBmi(bmiValue);
    setCategory(getBmiCategory(bmiValue));
  };
  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) 
        return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9)
         return "Normal Weight";
    if (bmi >= 25 && bmi < 29.9) 
        return "Overweight";
    return "Obese";
  };
  return (
    <body>
      <div>
      <h1>Welcome to BMI Calculation Page</h1>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}/>
      <input
        type="number"
        placeholder="Height(cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}/>
      <button onClick={calculateBmi}>Calculate BMI</button>
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <h4>Category: {category}</h4>
        </div>
      )}
    </div>
    </body>
  );
};
export default Bmi;
