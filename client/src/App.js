import 'bootstrap/dist/css/bootstrap.css'
import React, { createContext, useContext, useReducer } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/logout';
import Error from './components/error';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {initialState,reducer} from './reducer/useReducer';

export const userContext = createContext();


const App = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const Routing = () => {
    return (
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/logout'>
          <Logout />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    )
  }

  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>

        <Navbar />
        <Routing />

      </userContext.Provider>
    </>
  )
}

export default App
