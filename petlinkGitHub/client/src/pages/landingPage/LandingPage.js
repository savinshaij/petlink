import React from "react";
import "./LandingPage.css";

import { Link } from "react-router-dom";

   

import { useState } from "react";

function LandingPage() {
  return (
    <div className="landingPageMain">
      
      <section>
        <div className="container-landingpage">
          <div className="text">
           
              
               
                  <div className="text-wrapper">Welcome to PetLink,<br/> where tails wag and furry dreams find their forever homes</div>
                 
               
           
           

            <p className="text1">
            Discover joy at PetLink, where adoptions, playdates, and pet delights unite in one vibrant community! Your furry adventure starts here.
             
            </p>
            <br />
            <div className="buttonBox">
              <Link to="/Login">
                {" "}
                <button className="login-button">Login</button>
              </Link>
              <Link to="/Signup">
                <button className="signup-button">SignUp</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
