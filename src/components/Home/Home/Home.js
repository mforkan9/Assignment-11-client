import React from 'react';
import Footer from '../../Footer/Footer';
import Testimonial from '../../Testimonials/Testimonial';
import Header from '../Header/Header';
import LatestWork from '../LatestWork/LatestWork';
import Describe from '../ProgressPage/Describe';
const Home = () => {
    return (
        <>
            <Header></Header>
            <Describe></Describe>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </>
    );
};

export default Home;