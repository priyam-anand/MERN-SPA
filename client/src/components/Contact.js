import React from 'react'
import phone from '../images/phone.png';
import email from '../images/email.png';
import address from '../images/address.png';
const Home = () => {
    return (
        <>
            <h2>
                Contact Us.
            </h2>
            <div className="row my-5">
                <div className="card col-3 mx-auto my_card">
                    <div className="card-body">
                        <div className="py-2">
                            <img src={phone} className="d-inline-block" alt="phone" /> <h5 className="card-title d-inline-block mx-3">Phone</h5>
                        </div>
                        <p className="card-text my-3">+91 8417064554</p>
                    </div>
                </div>
                <div className="card col-3 mx-auto my_card">
                    <div className="card-body">
                        <div className="py-2">
                            <img src={email} className="d-inline-block" alt="email" /> <h5 className="card-title d-inline-block mx-3">Email</h5>
                        </div>
                        <p className="card-text my-3">priyam27.anand@gmail.com</p>
                    </div>
                </div>
                <div className="card col-3 mx-auto my_card">
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
                    <h3 className="col-3 mx-auto">
                        Get in touch
                    </h3>
                    <div className="col-3 mx-auto"></div>
                    <div className="col-3 mx-auto"></div>
                </div>
                <form>
                    <div className="row">
                        <div className="form-group col-3 mx-auto">
                            <div className="input-group">
                                <input type="text" className="form-control my-input" id="contact_form_name" placeholder="Your Name" required="required" />
                            </div>
                        </div>

                        <div className="form-group col-3 mx-auto">
                            <div className="input-group">
                                <input type="email" className="form-control my-input" id="contact_form_email" placeholder="Your Email Address" required="required" />
                            </div>
                        </div>

                        <div className="form-group col-3 mx-auto">
                            <div className="input-group">
                                <input type="number" className="form-control my-input" id="contact_form_phone" placeholder="Your Phone Number" required="required" />
                            </div>
                        </div>
                        <textarea id="contact_form_message" className="col-11 my-5 mx-auto"
                            rows="7" placeholder="Your message here">
                        </textarea>
                        
                        <button className="btn btn-success col-2 mx-auto" type="submit">Send Message</button>
                        
                    </div>
                </form>
            </div>
        </>
    )
}

export default Home
