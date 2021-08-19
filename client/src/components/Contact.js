import React, { useState, useEffect } from 'react'
import phone from '../images/phone.png';
import email from '../images/email.png';
import address from '../images/address.png';
const Home = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const getUserData = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                credentials: 'include',
                headers: {
                    Accept: "Application/json",
                    "Content-Type": "Application/json",
                },
            })
            const data = await res.json();

            setUserData({...userData,
                name: data.name,
                email: data.email,
                phone: data.phone
            })
            console.log(userData)
        }
        catch (err) {
            console.log(err);
        }
    }
    let eventName,eventValue;
    const handleInput = (event) =>{
        eventName=event.target.name;
        eventValue=event.target.value;

        setUserData({...userData, [eventName]:eventValue});
    }

    useEffect(() => {
        getUserData();
    }, [])

    const sendMessage = async (event) =>{
        event.preventDefault();

        const {name,email,phone,message} = userData;

        const res= await fetch('/contact',{
            method : "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,message
            })
        });

        const data=await res.json();

        if(!data)
        {
            window.alert("message not sent");
        }
        else
        {
            window.alert("message sent successfully");
            setUserData({...userData,message:""});
        }

        }

    return (
        <>
            <h2>
                Contact Us.
            </h2>
            <div className="row my-5">
                <div className="card col-md-3 mx-auto my_card">
                    <div className="card-body">
                        <div className="py-2">
                            <img src={phone} className="d-inline-block" alt="phone" /> <h5 className="card-title d-inline-block mx-3">Phone</h5>
                        </div>
                        <p className="card-text my-3">+91 8417064554</p>
                    </div>
                </div>
                <div className="card col-md-3 mx-auto my_card">
                    <div className="card-body">
                        <div className="py-2">
                            <img src={email} className="d-inline-block" alt="email" /> <h5 className="card-title d-inline-block mx-3">Email</h5>
                        </div>
                        <p className="card-text my-3">priyam27.anand@gmail.com</p>
                    </div>
                </div>
                <div className="card col-md-3 mx-auto my_card">
                    <div className="card-body">
                        <div className="py-2">
                            <img src={address} className="d-inline-block" alt="phone" /> <h5 className="card-title d-inline-block mx-3">Address</h5>
                        </div>
                        <p className="card-text my-3">Lucknow, Uttar Pradesh, India.</p>
                    </div>
                </div>
            </div>

            {/* contact form */}
            <div className="container py-4 mb-5 border my-container">
                <div className="row my-3">
                    <h3 className="col-md-3 mx-auto">
                        Get in touch
                    </h3>
                    <div className="col-md-3 mx-auto"></div>
                    <div className="col-md-3 mx-auto"></div>
                </div>
                <form>
                    <div className="row">
                        <div className="form-group col-md-3 mx-auto">
                            <div className="input-group">
                                <input type="text" name="name" className="form-control my-input form-text" value={userData.name} 
                                onChange={handleInput} id="contact_form_name" placeholder="Your Name" required="required" />
                            </div>
                        </div>

                        <div className="form-group col-md-3 mx-auto">
                            <div className="input-group">
                                <input type="email" name="email" className="form-control my-input form-text" value={userData.email} 
                                onChange={handleInput} id="contact_form_email" placeholder="Your Email Address" required="required" />
                            </div>
                        </div>

                        <div className="form-group col-md-3 mx-auto">
                            <div className="input-group">
                                <input type="number" name="phone" className="form-control my-input form-text" value={userData.phone} 
                                onChange={handleInput} id="contact_form_phone" placeholder="Your Phone Number" required="required" />
                            </div>
                        </div>
                        <textarea id="contact_form_message" className="col-md-11 my-5 mx-auto my-input form-text"
                            rows="7" placeholder="Your message here" name="message" value={userData.message} onChange={handleInput}>
                        </textarea>

                        <button className="btn btn-success col-md-2 mx-auto" type="submit" onClick={sendMessage}>Send Message</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Home
