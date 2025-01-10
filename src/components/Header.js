import React, {useState} from "react";
import { LOGO } from '../utils/constant';

import { NavLink } from "react-router";

import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO} alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/grocery">Grocery</NavLink>
                    </li>
                    <li>Cart</li>
                    <button 
                        className="login"
                        onClick={()=> { 
                            btnName === "Login" ?
                            setBtnName("Logout") :
                            setBtnName("Login")
                        }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;