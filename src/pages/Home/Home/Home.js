import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Strength from '../Strength/Strength';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Strength></Strength>
            <Footer></Footer>
        </div>
    );
};

export default Home;