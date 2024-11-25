import React from 'react';
import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Correct import for BrowserRouter, Route, and Switch
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import Home  from './Pages/Home';
import { PublicChannels } from './Pages/Channel';
import { JoinWithCode } from './Pages/JoinWithCode';
import { Footer } from './Components/Footer/footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} /> 
        <Route path="/Channels" element={<PublicChannels/>} />
        <Route path="/JoinWithCode" element={<JoinWithCode/>} /> 

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
