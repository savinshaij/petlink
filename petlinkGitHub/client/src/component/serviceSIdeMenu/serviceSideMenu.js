import React from "react";
import "./serviceSidemenu.css";
import { NavLink } from "react-router-dom";

export const SideMenu = () => {
    

    return (
        <div className="RequestSideMenu-box">
            <div className="RequestSideMenu-group">
                <div className="RequestSideMenu-div">
                <NavLink to="/" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>veteninary care</NavLink>
                <NavLink to="/" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Pet grooming</NavLink>      
                <NavLink to="/" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Pet training</NavLink>  
                <NavLink to="/" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Pet day care</NavLink>      
                <NavLink to="/" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> health care</NavLink>  
                 
                   
                </div>
            </div>
        </div>
    );
};
export default SideMenu;
