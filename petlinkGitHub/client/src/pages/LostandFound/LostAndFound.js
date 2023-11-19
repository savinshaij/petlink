import { useCallback, useEffect, useState } from "react";
import './LostAndFound.css'
import { Link } from "react-router-dom";
import NavBar2 from "../../component/navbar/LoginUserNavBar";


const LostAndFoundReg = () => {
  const today = new Date();
const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();
const time = today.toLocaleTimeString();
const CurrentDate = month + "/" + date + "/" + year + "   Time:" + time;
  return (
    <div className="LostAndFoundreg">
       <NavBar2/>
      <div className="LostAndFoundmain">
        <div className="LostAndFoundleft-grp">
          <div className="LostAndFoundevent-buttons-grp">
            
          <Link to="/lost-and-found"> <button className="LostAndFoundeventregedbtn">Request updates</button></Link>   
            
            
         <Link to="/lost-and-found-reg"><button className="LostAndFoundeventregbtn">Lost and Found Registration</button> </Link>     
          </div>
          <img alt="" className="LostAndFoundimagee-icon"/>
        </div>
        <div className="LostAndFoundright-grp">
          <form>
            <div className="LostAndFoundright-grp-child" />
            <div className="LostAndFoundcancelandsave-grp">
              <button className="LostAndFoundcancelbtn" id="clear">
                clear
              </button>
              <button className="LostAndFoundsave-button" type="submit" id="submit">
                submit
              </button>
            </div>
            <div className="LostAndFoundservice-details-grp">
              <div className="LostAndFoundservice-details-grp-input">
                <textarea
                  className="LostAndFoundservice-details-grp-input-child"
                  name="details"
                  
                  
                />
                <label className="LostAndFoundeventReg-label">Pet Details</label>
              </div>
            </div>
            <div className="LostAndFoundnoofcollecter-grp">
              <div className="LostAndFoundnoofcollecter-input">
                <label className="LostAndFoundeventReg-label">Found or Lost</label>
                <input
                  className="LostAndFoundevent-p-group-input"
               
                  name="collectorCount"
                  
                />
              </div>
            </div>
            <div className="LostAndFoundphone-grp">
              <label className="LostAndFoundeventReg-label">phone number</label>
              <input
                className="LostAndFoundevent-p-group-input"
                type="text"
                name="phone"
                
              />
            </div>
            <div className="LostAndFoundevent-p-group">
              <label className="LostAndFoundeventReg-label">Missing(days)  </label>
              <input
                className="LostAndFoundevent-p-group-input"
                type="text"
                name="period"
                
              />
            </div>
            <div className="LostAndFoundlocation-grp">
              <label className="LostAndFoundeventReg-label">Location</label>
              <input
                className="LostAndFoundevent-p-group-input"
                type="text"
                name="location" // Assuming location field is in the schema
                
              />
            </div>
            <div className="LostAndFounddate-grp">
              <div className="LostAndFounddate-input">
                <input
                  className="LostAndFoundevent-p-group-input"
                  type="text"
                  name="eventDate"
                  
                />
                <label className="LostAndFoundeventReg-label">Date</label>
              </div>
            </div>
            <div className="LostAndFoundservicename-grp">
              <label className="LostAndFoundeventReg-label">Pet Name</label>
              <input
                className="LostAndFoundevent-p-group-input"
                type="text"
                name="serviceName"
                
              />
            </div>
            <div className="LostAndFoundname-group">
              <label className="LostAndFoundname">Name</label>
              <input
                className="LostAndFoundname-input"
                type="text"
                name="name"
                
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LostAndFoundReg;
