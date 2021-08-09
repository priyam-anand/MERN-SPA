import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="login-form">
                <form>
                    <h2 className="text-center">Log in</h2>
                    <hr className="my-4"/>
                    <div className="form-group my-2">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user"></span>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="name" placeholder="Username" required="required" />
                        </div>
                    </div>
                    <div className="form-group my-2">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <button type="submit" className="btn btn-primary login-btn btn-block">Log in</button>
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
