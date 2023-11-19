import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './home.css'
import image1 from "./puppies.png"
import NavBar2 from "../../component/navbar/LoginUserNavBar"
import StaggeredDropDown from "../../component/homeDrop/homeDrop";
function HomePage() {
  return (
    <div className="home-landingPageMain">
      <NavBar2/>
      <section>
      <div className="homeimg">
            <img className="home-image" src={image1} alt="home_graphic"/>
        </div>
        <div className="home-left-container-landingpage">
          <div className="home-text">
            <div className="home-box">
              <div className="home-group">
                <div className="home-overlap-group">
                  <div className="home-text-wrapper">Pet</div>
                  <div className="home-div">Link</div>
                </div>
              </div>
            </div>
            <label className="home-join_text">Join our community,</label>
            <br/>
            <label className="home-pet_text">Pet Lovers today!</label>
            <br/>
            <label className="home-MainText">-Find your perfect furry companion on our platform.  Browse through a wide selection of adorable pets waiting for a loving home and more.
            </label>
            <div className="home-buttonBox">
            <StaggeredDropDown/>
          
            <button className="home-Services-button">pet house</button>
          <Link to="/community"> <button className="home-Community-button">Community</button></Link> 
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;