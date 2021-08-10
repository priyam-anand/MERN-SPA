import React from 'react'
import error from '../images/error.jpg'
import { NavLink } from 'react-router-dom';

const errorPage = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5 pt-3">
                    <div className="col-8">
                        <img src={error} alt="not found"/>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-centre align-items-center">
                        <h3 className="my-5 pt=5">
                            The Page you were looking for does not exist
                        </h3>
                        <NavLink className="btn btn-outline-primary my-3" to="/">Go To Home</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default errorPage
