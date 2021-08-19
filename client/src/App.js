import 'bootstrap/dist/css/bootstrap.css'
import React, { createContext, useReducer, useEffect } from 'react'
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
import { initialState, reducer } from './reducer/useReducer';
import MainPage from './components/MainPage';
import AddBlog from './components/AddBlog';

export const userContext = createContext();


const App = () => {



  const [state, dispatch] = useReducer(reducer, initialState);
  const getUserData = async () => {
    try {
      const resp = await fetch('/getdata', {
        method: "GET",
        credentials: 'include',
        headers: {
          Accept: "Application/json",
          "Content-Type": "Application/json",
        }
      })
      const data=await resp.json();
      console.log(data);
      
      dispatch({ type: 'USER', payload:{val:true, id:data.id }})
    } catch (err) {
      console.log(err);
    }


  }
  useEffect(() => {
    getUserData()
  }, [])

  const Routing = () => {
    return (
      <>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path="/mainpage">
            <MainPage />
          </Route>

          <Route path="/addblog">
            <AddBlog />
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
      </>

    )
  }

  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Routing />
      </userContext.Provider>
    </>
  )
}

export default App
