// import logo from './logo.svg';
import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Cat from './page/Cat';
import OnlyCat from "./page/OnlyCat"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
  const App = () => {
  // const [progress, setProgress] = useState(0);
  // setProgress(progress);
    return (
      <div>
        <Router>
        <Navbar/>
      
        <Routes>
        <Route exact path='/' element={<Cat />} />
        <Route exact path="/:id" element={<OnlyCat />} />
        </Routes>
        </Router>
      </div>
    )
  
  }
  export default App
