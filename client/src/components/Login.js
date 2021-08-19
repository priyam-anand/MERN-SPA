import React,{useContext, useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import {userContext} from '../App';

function Login() {

    const {state,dispatch} = useContext(userContext);

    const [user,setUser]=useState({
        email:"",
        password:""
    })

    const history=useHistory();

    const handleInput = (event)=>{
        const eN=event.target.name;
        const eV=event.target.value;

        setUser({...user, [eN]:eV});
    }

    const handlePost = async (event)=>{

        event.preventDefault();

        const {email,password}=user;

        const res= await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        })
        const data=await res.json();
        
        console.log(data)

        if(res.status!==201 || !data)
        {
            window.alert("Login Failed")
        }
        else
        {   
            dispatch({type:'USER',payload:{val:true,id:data.id}})
            window.alert("Login Success");
            history.push('/');
        }
    }
    return (
        <>
            <div className="login-form">
                <form method="POST">
                    <h2 className="text-center">Log in</h2>
                    <hr className="my-4"/>
                    <div className="form-group my-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user"></span>
                                </span>
                            </div>
                            <input type="email" className="form-control" value={user.email} 
                            onChange={handleInput} name="email" placeholder="Email" required="required" autoComplete="off"/>
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" className="form-control" value={user.password} 
                            onChange={handleInput} name="password" placeholder="Password" required="required" />
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <button type="submit" className="btn btn-primary login-btn btn-block" 
                        onClick={handlePost}>Log in</button>
                    </div>
                    
                    <div className="or-seperator"><i>or</i></div>
                    <p className="text-center">Login with your social media account</p>
                    <div className="text-center social-btn">
                        <NavLink to="/" className="btn btn-secondary"><i className="fa fa-facebook"></i>&nbsp; Facebook</NavLink>
                        <NavLink to="/" className="btn btn-info"><i className="fa fa-twitter"></i>&nbsp; Twitter</NavLink>
                        <NavLink to="/" className="btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</NavLink>
                    </div>
                </form>
                <p className="text-center text-muted small">Don't have an account? <NavLink to="/register">Register here!</NavLink></p>
            </div>
        </>
    )
}

export default Login
