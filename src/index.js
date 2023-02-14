import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Login, Register, Activities, Routines, MyRoutines, Home} from './components/index'


const App = ()=> {
  
  return (
    <div class="header">
      <h1>Front End</h1>
      <nav>
        <h2>Login</h2>
      </nav>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);
