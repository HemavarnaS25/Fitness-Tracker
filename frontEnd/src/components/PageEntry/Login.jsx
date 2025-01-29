import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './css/Login.css';
import axios from 'axios';
const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin =async (e) =>{
    e.preventDefault()
    try{
        console.log("event triggered");
        const req = await axios.post("http://localhost:3001/login",{
          
          email:email,
          password:password
        })
        //console.log(req)
        alert(req.data.response);
        if(req.data.loginStatus){
          setIsLoggedIn;
          navigate("/dashboard");
        }
        else{
          navigate("/login")
        }
      }
        catch(err){
          console.log(err);
        }
  }
  return (
    <div >
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit">Login</button>
      </form>
      <p >
        Don't have an account? <Link to="/">Signup</Link>
      </p>
      </div>
    </div>
  );
};

// const pageStyle = {
//     backgroundImage:
//       'url("https://wallpapercave.com/wp/wp6324222.png")', 
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     height: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };
  
export default Login;