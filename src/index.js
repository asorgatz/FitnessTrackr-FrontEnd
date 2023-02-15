import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import { fetchRoutines } from "./api";
import {
  Login,
  Register,
  Activities,
  Routines,
  MyRoutines,
  Home,
} from "./components/index";


const App = () => {
  const [routines, setRoutines] = useState([])
  
  const getRoutines = async ()=>{
    const newRoutines = await fetchRoutines()
    setRoutines(newRoutines)
  }



  useEffect(()=>{
    getRoutines()
  })




  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/login">Login/Register</Link>
      </nav>
      <div className='content'>
        <div className='left'>
        </div>
        <div className='mid'>
        <Routes>
          <Route path='/' element = {<h1>Home</h1>}/>
          <Route path='/routines' element = {<Routines routines={routines}/>}/>
          <Route path='/activities' element = {<h1>Activities</h1>}/>
          <Route path='/login' element = {<h1>Login</h1>}/>
        </Routes>
        </div>
        <div className='right'></div>
      </div>
    </div>
  );
};

const root = createRoot(document.querySelector("#root"));

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
