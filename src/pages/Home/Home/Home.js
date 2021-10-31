import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Banner from '../Banner/Banner';
import Strength from '../Strength/Strength';
import Tours from '../Tours/Tours';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <ContactUs></ContactUs>
            <Strength></Strength>
        </div>
    );
};

export default Home;