import React from "react";

const NormalDiet = () => {
  return (
    <body>
      <div>
      <h1>Balanced Diet for Normal BMI</h1>
      <img 
        src="./src/assets/Normal-diet.jpg" 
        alt="Healthy balanced diet" 
        style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }} 
      />
      <ul>
            
        <li> 
          Maintain a well-balanced diet with proteins, carbs, and healthy fats.
          </li>
        <li>Include fruits, vegetables, and whole grains.</li>
        <li>Stay active and hydrated.</li>
        <li>Avoid processed foods and excess sugar.</li>
        <li>Focus on portion control and mindful eating.</li>
      </ul>
    </div>
    </body>
  );
};

export default NormalDiet;

