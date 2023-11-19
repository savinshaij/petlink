import React from "react";
import { useState, useEffect } from "react";
import "./profile.css";
import mailicon from "./Mail.png";
import phoneicon from "./Phone.png";
import NavBar2 from "../../component/navbar/LoginUserNavBar";
import axios from "axios";

import { Link } from "react-router-dom";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
 
  const a = "";
  useEffect(() => {
    axios.post("http://localhost:3001/profile",a)
      .then((result) => {
        setFirstName(result.data.firstName);
        setLastName(result.data.lastName);
        setEmail(result.data.email);
        setphone(result.data.phone);
      
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
   
      <div className="default-profile">
      <NavBar2/>
        <div className="overlap-wrapper">
        
          <div className="overlap">
            <div className="rectangle" />
            <div className="overlap-group">
              <div className="frame">
                <div className="div">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-4">
                      <div className="text-wrapper">First Name:</div>
                      <div className="text-wrapper-2">{firstName}</div>
                    </div>
                  </div>
                  <div className="div-wrapper">
                    <div className="overlap-4">
                      <div className="name-field" />
                      <div className="text-wrapper-3">{lastName}</div>
                      <div className="text-wrapper-4">Last Name:</div>
                    </div>
                  </div>
                  <div className="group-2">
                    <div className="overlap-4">
                      <div className="text-wrapper-5">Email Address:</div>
                      <div className="group-3">
                        <div className="text-wrapper-6">{email}</div>
                        <img className="mail" alt="Mail" src={mailicon} />
                      </div>
                    </div>
                  </div>
                  <div className="group-4">
                    <div className="overlap-4">
                      <div className="text-wrapper-7">Phone Number</div>
                      <div className="group-5">
                        <img className="phone" alt="Phone" src={phoneicon} />
                        <div className="text-wrapper-8">{phone}</div>
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div className="group-8">
                  <div className="overlap-6">
                    <Link to={"/profile-edit"}>
                      {" "}
                      <button className="edit">Edit</button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
             
                <div className="general-info-photo">
                <div className="profile-left-section">
                  <div className="profile-image">
                    <div className="profile-image-child" />
                    <div className="profile-image-item" />
                    <div className="name-firstChar">{firstName.charAt(0)}</div>
                  </div>
                  <div className="text-wrapper-12">
                    {firstName + " " + lastName}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
