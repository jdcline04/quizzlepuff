import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from './TitleBar.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <TitleBar />
     <button className="nav-button">Create Quiz</button>
     <br />
     <button className="nav-button">Look-up Results</button>
     <footer className="page-footer">
      <p>Contact Us</p>
      <p>Privacy Policy</p>
      <p>Copyright &#169; One Quiz 2020 All Rights Reserved</p> 
    </footer> 
    </div>
  );
}

export default App;
