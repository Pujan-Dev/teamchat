import React from 'react';
import { NavLink } from 'react-router-dom'; // Corrected import from 'react-router-dom'
import "./Navbar.css";

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="Navbar-main">
                <NavLink to="/" className="logo">TeamChat</NavLink>
            </div>
            <nav className='subNav'>
                <NavLink 
                    to="/Channels" 
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    Channels
                </NavLink>
                <NavLink 
                    to="/JoinWithCode" 
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    Join with code
                </NavLink>
            </nav>
        </div>
    );
}
