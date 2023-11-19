import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import image from "./images/loginimg.jpg";
import "./css/main.css";
import "./css/util.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [popvalue,setpopValue]=useState ("")
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  

  const handleSubmit = (e) => {
    if (password != null && email != null) {
      e.preventDefault();
      axios
        .post("http://localhost:3001/login", {
          email,
          password,
        })
        .then((result) => {
          console.log(result);
          if (result.data !== "incorrect-password" && result.data !== "user-not-found") {
           //props.loginSts(true);//upliffting
           //console.log(result.data)
           if (result.data.email === "wasteconnect.admin@gmail.com" && result.data.password === "680586"){
            navigate("/Ahome");
           }
           else{
            navigate("/home");
           }
            
            
          } else {
           alert(result.data)//value inside popup window
            
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("email and password needed")//value inside popup window
    
      
     
      e.preventDefault();
    }
  };
 
  return (
    <div className="loginMainDiv">
     
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt="">
              <img className="loginimageleft" src={image} alt="IMG" />
            </div>
            <form
              className="login100-form validate-form"
              onSubmit={handleSubmit}
            >
              <span className="login100-form-title">Login</span>
              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input100" />
              </div>
              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100" />
              </div>
              <div className="container-login100-form-btn">
              <button className="login100-form-btn" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) };


export default Login;
