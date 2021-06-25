import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'
const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2  py-5 px-4" style={{height:'100vh'}}>
            <ul className="list-unstyled">
                <li>
                    <Link  className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order list</span>
                    </Link>
                </li>
                <li>
                    <Link  className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link  className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link  className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Service</span>
                    </Link>
                </li>
                <li>
                    <Link  className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link  className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book list</span>
                    </Link>
                </li>
                <li>
                    <Link  className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Review</span>
                    </Link>
                </li>
                </ul>
                <div>
                <Link to="/" className="text-white" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;