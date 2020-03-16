import React from 'react';
import './App.css';
import NavBar from './Components/NavBar.js'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Pages/Routes.js'


function App() {



  return (
    <div>
      {/* <LoginForm />
      <Payment /> */}
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
