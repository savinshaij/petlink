import { useState } from "react";
import axios from 'axios';
import "./css/main.css";
import "./css/util.css";
import image from "./images/signup.jpg"
import { useNavigate} from "react-router-dom";




function Signup() {
  const[firstName,setFirstName]=useState()
  const[lastName,setLastName]=useState()
  const[email,setEmail]=useState()
  const[phone,setphone]=useState()
  
  const[password,setPassword]=useState()
  let[confrimPassword,setconfrimPassword]=useState()
  const navigate = useNavigate();



   
  
  const handleSubmit =(e) =>{
    if((password!=null)&&(firstName!=null)&&(lastName!=null)&&(email!=null)){
      if((password === confrimPassword)){
        e.preventDefault();
        axios.post('http://localhost:3001/signup',{firstName,lastName,email,phone,password})
        .then(result => {console.log(result)
          navigate("/login");
          
        })
        .catch(err => console.log(err))
      }
      else{
        alert("password not matching")//value inside popup window
       
        e.preventDefault();
      }
  
  }
  else{
    
    alert("insufficiant details")//value inside popup window
   
    e.preventDefault();
    
  }
  }
 
  
  return (
    <div className="SignupMainDiv">
      
       <div className="limiter">
        
  <div className="container-login100">
    <div className="wrap-login100">
      <div className="login100-pic js-tilt" data-tilt="">
        <img className="signupimgleft" src={image} alt="IMG" />
      </div>
      <form className="signup-form validate-form" onSubmit={handleSubmit}>
        <span className="login100-form-title">Sign Up</span>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
          />
        </div>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
          />
        </div>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e)=> setphone(e.target.value)}
          />
        </div>
     
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="password"
            value={confrimPassword}
            onChange={(e)=> setconfrimPassword(e.target.value)}
            placeholder="enter password again"
          />
        </div>
        <div className="container-login100-form-btn" >
        <button type="submit"  className="login100-form-btn">sign up</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  );
}

export default Signup;
