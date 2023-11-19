import "./petCareServices.css";
import NavBar2 from "../../component/navbar/LoginUserNavBar";
import { useEffect, useState } from "react";
import SideMenu from "../../component/serviceSIdeMenu/serviceSideMenu"

const PetCareServices = () => {
  return (
    <div>
      <NavBar2/>

      <div className="events-reg">
        <div className="main">
          <div className="left-grp">
            <SideMenu/>
          </div>
          <div className="my-request-right-grp">
            <div className="my-request-group1">
            Your <span  className="service-request-bold2"> pets</span> are our first priority
            </div>
            <div className="my-request-group2">
             
             <span>
             <div className="point"/>
             Service excellence, where every detail matters and satisfaction is our standard. <span  className="service-request-bold1"> </span> and <span  className="service-request-bold1"></span></span>
            </div>
             
              
             
             

            <div className="my-request-group3" >
            
            <span>
            <div className="point"/>
            Unleashing excellence through our unparalleled services, because your satisfaction is our signature. <span className="service-request-bold1"> </span>  
           
            </span>
             
            </div>
            <div className="my-request-group4">
            Elevating experiences, one service at a time
            
            </div>
         

         
        

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCareServices;
