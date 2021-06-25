import React from 'react';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import ServiceCard from '../ServiceItem/ServiceCard';

import './Header.css'
const Header = () => {
    return (
        <div className='main-header'>
        <div className='header'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <ServiceCard></ServiceCard>
            
        </div>
        </div>
    );
};

export default Header;