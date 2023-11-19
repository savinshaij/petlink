import { useCallback, useEffect, useState } from "react";
import "./Lost.css"
import NavBar2 from "../../../component/navbar/LoginUserNavBar";
import { Link } from "react-router-dom";



const LostAndFoundRequestUpdates = () => {
  const today = new Date();
  const [openModal, setOpenModal] = useState(false);
  const [popvalue,setpopValue]=useState ("")
const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();
const time = today.toLocaleTimeString();
const CurrentDate = month + "/" + date + "/" + year + "   Time:" + time;
  return (
    <div className="Lostreg">
     <NavBar2/>
      <div className="Lostmain">
        <div className="Lostleft-grp">
          <div className="Lostevent-buttons-grp">
            
          <Link to="/lost-and-found"> <button className="LostAndFoundeventregedbtn">Request updates</button></Link>   
            
            
            <Link to="/lost-and-found-reg"><button className="LostAndFoundeventregbtn">Lost and Found Registration</button> </Link> 
          </div>
        </div>
        <div className="Lostright-grp">
          <form>
            <div className="Lostright-grp-child" />
            <div className="Lostcancelandsave-grp">
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LostAndFoundRequestUpdates;
