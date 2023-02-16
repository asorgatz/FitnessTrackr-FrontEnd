import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import { fetchRoutines, fetchActivities, login, exchangeTokenForUser } from "./api";
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
  const [activities, setActivities] = useState([])

  
  const getRoutines = async ()=>{
    const newRoutines = await fetchRoutines()
    setRoutines(newRoutines)
  }

  const getActivities = async ()=>{
    const newActivities = await fetchActivities()
    setActivities(newActivities)
  }



  useEffect(()=> {
    getRoutines()
    getActivities()
    exchangeTokenForUser()
  },[])




  return (
    <div>

      <div className='content'>
        <div className='left'>
          <Register />
          <Login />
        </div>
        <div className='mid'>
        <nav>
          <Link to="/routines">Routines</Link>
          <Link to="/activities">Activities</Link>
        </nav>
        <Routes>
          <Route path='/' element = {<h1>Home</h1>}/>
          <Route path='/routines' element = {<Routines routines={routines}/>}/>
          <Route path='/activities' element = {<Activities activities={activities}/>}/>
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

