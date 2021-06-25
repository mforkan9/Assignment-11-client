import React, { useContext, useEffect, useState } from 'react';
import { ContextUser } from '../../../App';
import './BookList.css'
const BookList = () => {
    const {value1} = useContext(ContextUser)
    const [loggedInUser,setLoggedInUser] = value1
    const [bookingItem, setBookingItem] = useState([])

    useEffect(() => {
        fetch('https://evening-retreat-30393.herokuapp.com/showBooking?email='+loggedInUser.email,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                authorization:`Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookingItem(data))
    }, [loggedInUser])
    return (
        <div className='container p-5'>
            <div className='row'>
               {
                   bookingItem.map(info =>{
                    return <div class="col-md-6 mt-5">
                    <div class="booking-card">
                        <div class="image-container">
                            <div class="first">
                                <div class="d-flex justify-content-between align-items-center"> <span class="discount"><img src={`data:image/jpeg;base64,${info.image.img}`} class="img-fluid  p-3" /></span> <span class="wishlist"><i class="fa fa-heart-o"></i></span> </div>
                            </div>
                        </div>
                        <div class="product-detail-container p-2">
                            <div class=" justify-content-between align-items-center ">
                                <h3 class="dress-name">{info.name}</h3>
                                <p>{info.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                   })
               }
            </div>
        </div>
    );
};

export default BookList;