import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Strength from '../Strength/Strength';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Tours></Tours>
            <Strength></Strength>
            <Footer></Footer>
        </div>
    );
};

export default Home;