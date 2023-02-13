import React, { useState, useEffect } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Login, Register, Activities, Routines, MyRoutines, Home} from './components/index'


const App = ()=> {
  return (
    <div>
      <h1>Front End</h1>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
