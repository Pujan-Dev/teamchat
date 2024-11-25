// Home.js
import React from 'react';
import "./Home.css"
import { NavLink } from 'react-router-dom';
import { Footer } from '../Components/Footer/footer';

const Home = () => {
  return (
    <div className='Home'>
      <h1>Welcome to TeamChat</h1>
      <p>Welcome to the homepage!</p>
      <p>Team chat is an chatting app where you can chat with anyone </p>
      <div className="Use-button">
        <NavLink to="/Channels" className="BUTTON" >Chat now</NavLink>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Home; // Default export
