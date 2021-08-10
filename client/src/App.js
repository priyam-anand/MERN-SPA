import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Error from './components/error';
import './App.css';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />

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

        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  )
}

export default App
