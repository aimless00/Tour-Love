import React from 'react';
import img from '../../../contactUs.jpg'

const ContactUs = () => {
    return (
        <div className="bg-light w-75 mx-auto mb-5 p-5">
            <h2 className="text-success mt-5">Contact Us</h2>
            <div className="d-flex justify-content-between align-items-center ">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p className="mb-0">Your Email Adress</p>
                    <input className="mx-2 px-5 mb-4" type="email" placeholder="name@example.com" name="" id="" />
                    <br />
                    <p className="mb-0">Write Your Email Here</p>
                    <textarea name="text" id="text" cols="30" rows="4"></textarea>
                    <br />
                    <button className="btn btn-success">Send</button>
                    <p className="pb-2"><i className="fas fa-phone fs-5 mx-2"></i>Phone Number: 0178555454</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;