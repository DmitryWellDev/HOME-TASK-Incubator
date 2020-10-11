import React from "react";
import  './Navbar.css'
import {NavLink} from "react-router-dom";

function Navbar() {
return(
    <div className="dropdown">
        <ul className="dropdown_content">
            <li className='item'><NavLink className={'dropdownContent_item'} activeClassName={'active'} to="/Prejunior">Prejunior</NavLink></li>
            <li className='item'><NavLink className={'dropdownContent_item'} activeClassName={'active'} to="/Junior">Junior</NavLink></li>
            <li className='item'><NavLink className={'dropdownContent_item'} activeClassName={'active'} to="/Junior+">Junior+</NavLink></li>
        </ul>
    </div>
)
}

export default Navbar