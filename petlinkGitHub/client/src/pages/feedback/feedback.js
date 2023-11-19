import "./feedback.css"
import Image from "./feedimg.jpg"
import NavBar2 from "../../component/navbar/LoginUserNavBar";
const Feedback = () => {
  return (
    <div className="ServiceReg">
     <NavBar2/>
      <div className="left-container-ServiceReg"><img src={Image}/></div>
      <div className="right-container-ServiceReg">
        <div className="ServiceReg-form-div">
            <form className="ServiceReg-form">

           
          <div className="ServiceReg-name">
            <label className="ServiceReg-name-label">Name</label>
            <input className="ServiceReg-name-input"></input>
          </div>
         
          <div className="ServiceReg-name">
            <label className="ServiceReg-name-label">feedback</label>
            <textarea type="textarea" className="ServiceReg-name-textarea"></textarea>
          </div>
          <div className="ServiceReg-btn-grp">
            <button className="ServiceReg-clear-btn" >clear</button>
            <button className="ServiceReg-submit-btn" >submit</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
