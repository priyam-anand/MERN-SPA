import React, { useEffect,useState } from 'react'
import userImg from '../images/user.png';
import {useHistory} from 'react-router-dom'


const About = () => {

    const [user,setUserData] = useState();

    const history = useHistory();

    const callAboutPage = async () =>{
        try{
            const resp = await fetch('/about',{
                method:"GET",
                credentials: 'include',
                headers:{
                    Accept:"Application/json",
                    "Content-Type":"Application/json",
                }, 
            });

            const data = await resp.json();
            
            setUserData(data);

            if(resp.status !== 200)
            {
                const err=new Error(resp.err);
                throw err;
            }
        }catch(err){
            console.log(err);
            history.push('/login');
        }

    }

    useEffect(() => {
        callAboutPage();
    },[])

    return (
        <>
            <div className="container my-container about-container">
                <form>
                    <div className='row mt-3 py-3'>
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src={userImg} alt="user pic" className="user-img" />
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head py-5">
                                <h4>
                                    {user===undefined ? "no State Yet":user.name}
                                </h4>
                                <h5>
                                    {user===undefined ? "no State Yet":user.work}
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
                        <div className='col-md-2'>
                            <input type="submit" className="btn btn-outline-primary btn-sm" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-4 d-flex flex-column justify-content-centre align-items-center">
                            <a href="https://www.instagram.com/anand.priyam/" targe="_blank" className="social-link">Instagram</a>
                            <a href="https://www.linkedin.com/in/priyam-anand-064640197/" targe="_blank" className="social-link">LinkedIn</a>
                            <a href="https://codeforces.com/profile/priyam_anand" targe="_blank" className="social-link">CodeForces</a>
                            <a href="https://github.com/priyam-anand" targe="_blank" className="social-link">GitHub</a>
                        </div>
                        <div className="col-md-8 pl-5">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpannel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                            {user===undefined ? "no State Yet":user._id}
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                            {user===undefined ? "no State Yet":user.name}
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user===undefined ? "no State Yet":user.email}</p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>+91 {user===undefined ? "no State Yet":user.phone}</p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Work</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user===undefined ? "no State Yet":user.work}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpannel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Newbie</p>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>5</p>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>5</p>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Work</label>
                                        </div>
                                        <div className="col-md-6">
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

export default About;
