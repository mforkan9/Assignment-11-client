import React, { useContext, useEffect, useState } from 'react';
import { ContextUser } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Dashedboard.css'
import Booking from '../../UserItem/Book/Booking';
import BookList from '../../UserItem/BookList/BookList';
import OrderList from '../../Admin/OrderList/OrderList';
import AddService from '../../Admin/AddService/AddService';
import MakeAdmin from '../../Admin/MakeAdmin/MakeAdmin';
import Home from '../../Home/Home/Home';
import Review from '../../UserItem/Review/Review';
import Footer from '../../Footer/Footer';
const routes = [

    {
        path: "/order",
        exact: true,
        main: () => <OrderList></OrderList>
    },
    {
        path: "/addService",
        main: () => <AddService></AddService>
    },
    {
        path: "/makeAdmin",
        main: () => <MakeAdmin></MakeAdmin>
    },
    {
        path: "/manageService",
        main: () => <h2>Shoelaces</h2>
    },
    {
        path: "/book",

        main: () => <Booking></Booking>
    }, {
        path: "/bookList",
        main: () => <BookList></BookList>
    }, {
        path: "/review",
        main: () => <Review></Review>
    }
];

const DashedBoard = () => {
    const { value1 } = useContext(ContextUser)
    const [loggedInUser, setLoggedInUser] = value1
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://evening-retreat-30393.herokuapp.com/accessAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser])
    return (
      
        <section className='body'>
            <Router>
                <div class="s-layout">
                    <div class="s-layout__sidebar">
                        <a class="a s-sidebar__trigger" href="#0">
                            <i class="fa fa-bars"></i>
                        </a>

                        <nav class="s-sidebar__nav">
                            <ul>
                                {isAdmin && <div>
                                    <li>
                                        <Link to="/order">
                                            <a class=" a s-sidebar__nav-link" href="#0">
                                                <i class="fa fa-home"></i><em>Order list</em>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/addService">
                                            <a class="a s-sidebar__nav-link" href="#0">
                                                <i class="fa fa-user"></i><em>Add Service</em>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/makeAdmin">
                                            <a class="a s-sidebar__nav-link" href="#0">
                                                <i class="fa fa-camera"></i><em>Make Admin</em>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/manageService">
                                            <a class="a s-sidebar__nav-link" href="#0">
                                                <i class="fa fa-camera"></i><em>Manage Service</em>
                                            </a>
                                        </Link>
                                    </li>
                                </div>}
                                <li>
                                    <Link to="/book">
                                        <a class="a s-sidebar__nav-link" href="#0">
                                            <i class="fa fa-camera"></i><em>Book</em>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bookList">
                                        <a class="a s-sidebar__nav-link" href="#0">
                                            <i class="fa fa-camera"></i><em>Book list</em>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/review">
                                        <a class="a s-sidebar__nav-link" href="#0">
                                            <i class="fa fa-camera"></i><em>Review</em>
                                        </a>
                                    </Link>
                                </li>
                                <div>
                                    <a href='/' className="text-white" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></a>
                                </div>
                            </ul>
                        </nav>
                    </div>


                    <main class="s-layout__content">
                        <Switch >
                            {routes.map((route, index) => (
                                // Render more <Route>s with the same paths as
                                // above, but different components this time.
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </main>
                </div>
            </Router>
        
        </section>
    );
};

export default DashedBoard;