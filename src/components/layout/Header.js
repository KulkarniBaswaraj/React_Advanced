import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
    <nav className="navbar navbar-expand-md bg-warning navbar-dark">
        <NavLink to="/" className="navbar-brand"> Expensify  </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/edit" className="nav-link">  Edit  </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/help" className="nav-link"> Help </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link"> About  </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;