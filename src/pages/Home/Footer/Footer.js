import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark d-flex justify-content-between">
            <div className="text-white py-4">
                <h3>Travel Specialists</h3>
                <p><span>First Class Flights</span><br /><span>Acceibale Tours</span><br /><span>Amazing Crusis</span></p>
            </div>
            <div className="text-white py-4 w-50 mx-auto">
                <h3>Our Twitter</h3>
                <p className="w-50 mx-auto"><span>@Aimless Our trip to Morocco was yone that made it happen seamlessly.</span><br /><span>@AKash Fantastic! Our Costa Rica travel company took care of everything  and chocolat.</span></p>
            </div>
            <div className="text-white py-4">
                <h3>Newsletter</h3>
                <p>Inspiration, ideas, news and your feedback</p>
                <input placeholder="Write Your Idea" type="text" />
                <input type="submit" value="Submit" />
                <div className="my-2">
                    <i class="mx-2 fab fa-facebook fs-3"></i>
                    <i class="mx-2 fab fa-twitter-square fs-3"></i>
                    <i class="mx-2 fab fa-instagram-square fs-3"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;