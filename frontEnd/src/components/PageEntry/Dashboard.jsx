import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = ({ userEmail }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome, {userEmail}!</h1>
      <p>This is a website where you can track fitness and enhance your health.</p>
      <div>
        <button onClick={() => navigate("/bmi")}>  BMI  </button>
      </div>
      <div>
        <button onClick={() => navigate("/diet")}>  Diet  </button>
      </div>
      <div>
        <button onClick={() => navigate("/exercise")}>Exercise</button>
      </div>
    </div>
  );
};
export default Dashboard;
