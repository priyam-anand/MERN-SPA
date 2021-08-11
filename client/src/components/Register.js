import React, { useState } from 'react'
import { NavLink,useHistory } from 'react-router-dom'

const Register = () => {

    const history=useHistory();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    })

    let eventName,eventValue;

    const postData = async (event)=>{
        event.preventDefault();

        const {name,email,phone,work,password,cpassword}=user;

        const res = await fetch('/register', {
            method : "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        })
        const data = await res.json();
        console.log(data);
        if(!data || data.status===422)
        {
            window.alert("Registration Failed")
        }
        else
        {
            window.alert("Registration Success");
            history.push('/login');
        }
    }

    const handleInput = (event)=>{
        eventName=event.target.name;
        eventValue=event.target.value;

        setUser({...user, [eventName]:eventValue});
    }

    return (
        <div className="signup-form">
            <h2>Register</h2>
            <p>Please fill in this form to create an account!</p>
            <hr />
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <span className="fa fa-user"></span>
                        </span>
                    </div>
                    <input type="text" className="form-control" name="name" value={user.name} onChange={handleInput} placeholder="Username" required="required" />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-paper-plane"></i>
                        </span>
                    </div>
                    <input type="email" className="form-control" name="email" value={user.email} onChange={handleInput} placeholder="Email Address" required="required" />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-phone"></i>
                        </span>
                    </div>
                    <input type="number" className="form-control" name="phone" value={user.phone} onChange={handleInput} placeholder="Phone Number" required="required" />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-briefcase"></i>
                        </span>
                    </div>
                    <input type="text" className="form-control" name="work" value={user.work} onChange={handleInput} placeholder="Your Profession" required="required" />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-lock"></i>
                        </span>
                    </div>
                    <input type="password" className="form-control" name="password" value={user.password} onChange={handleInput} placeholder="Password" required="required" />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-lock"></i>
                            <i className="fa fa-check"></i>
                        </span>
                    </div>
                    <input type="password" className="form-control" name="cpassword" 
                    value={user.cpassword} onChange={handleInput} placeholder="Confirm Password" required="required" />
                </div>
            </div>
            <div className="form-group">
                <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg" onClick={postData}>Register</button>
            </div>

            <div className="text-center">Already have an account? <NavLink to="/login">Login here</NavLink></div>

        </div>
    )
}

export default Register
