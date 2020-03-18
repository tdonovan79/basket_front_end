import React, { useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar.js'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Pages/Routes.js'
import CheckContainer from './Containers/CheckContainer';
import { useDispatch } from 'react-redux'


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.length > 0)
    dispatch({
      type: 'SET_EMPLOYEE',
      payload: JSON.parse(localStorage.employee)
    });
  }, [dispatch]
  )
  return (
    <div>
      <Router>
        <NavBar />
        <Routes />
        <CheckContainer />
      </Router>
    </div>
  );
}

export default App;
