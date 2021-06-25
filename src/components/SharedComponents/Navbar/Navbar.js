import React from 'react';
import './Navbar.css'
import img from './image/trees.png'
import { Link } from 'react-router-dom';
import ServiceCard from '../../Home/ServiceItem/ServiceCard';
const Navbar = () => {
    return (
        <div className='nav-body'>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="check-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className='logo'><img src={img} alt="" />LandScape</label>
                <ul>
                    <li><a id='din' href="#">Home</a></li>
                    <li> <Link to='/About'><a id='din' href="#">DashBoard</a> </Link></li>
                    <li><Link><a id='din' href="#">Blogs</a></Link></li>
                    
                    <li className='active'> <Link to='/Login'><a id='din' style={{background:'#0ac719'}} href="#">Login</a> </Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;