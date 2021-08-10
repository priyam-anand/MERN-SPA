import React from 'react'
import user from '../images/user.png';
const Home = () => {
    return (
        <>
            <div className="container my-container about-container">
                <form>
                    <div className='row mt-3 py-3'>
                        <div className="col-4 d-flex justify-content-center">
                            <img src={user} alt="user pic" className="user-img" />
                        </div>
                        <div className="col-6">
                            <div className="profile-head py-5">
                                <h4>
                                    Your Name here
                                </h4>
                                <h5>
                                    Your Profession here
                                </h5>
                            </div>
                            <div className="tabs">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">TimeLine</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-2'>
                            <input type="submit" className="btn btn-outline-primary btn-sm" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-4 d-flex flex-column justify-content-centre align-items-center">
                            <a href="https://www.instagram.com/anand.priyam/" targe="_blank" className="social-link">Instagram</a>
                            <a href="https://www.linkedin.com/in/priyam-anand-064640197/" targe="_blank" className="social-link">LinkedIn</a>
                            <a href="https://codeforces.com/profile/priyam_anand" targe="_blank" className="social-link">CodeForces</a>
                            <a href="https://github.com/priyam-anand" targe="_blank" className="social-link">GitHub</a>
                        </div>
                        <div className="col-8 pl-5">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpannel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-6">
                                            <p>7547577662661179</p>
                                        </div>

                                        <div className="col-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-6">
                                            <p>Priyam Anand</p>
                                        </div>

                                        <div className="col-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-6">
                                            <p>priyam27.anand@gmail.com</p>
                                        </div>

                                        <div className="col-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-6">
                                            <p>+91 9417064554</p>
                                        </div>

                                        <div className="col-6">
                                            <label>Work</label>
                                        </div>
                                        <div className="col-6">
                                            <p>Nothing T_T</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpannel" aria-labelledby="profile-tab">
                                <div className="row">
                                        <div className="col-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-6">
                                            <p>Newbie</p>
                                        </div>
                                        <div className="col-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-6">
                                            <p>5</p>
                                        </div>
                                        <div className="col-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-6">
                                            <p>5</p>
                                        </div>
                                        <div className="col-6">
                                            <label>Work</label>
                                        </div>
                                        <div className="col-6">
                                            <p>Nothing T_T</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Home
