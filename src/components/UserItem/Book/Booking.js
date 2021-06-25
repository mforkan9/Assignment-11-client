import React, { useContext, useState } from 'react';
import { ContextUser } from '../../../App';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import './Booking.css'
const Booking = () => {
    const { value1, value2, value3 } = useContext(ContextUser)
    const [loggedInUser, setLoggedInUser] = value1
    const [order, setOrder] = value2
    const [paymentSuccess, setPaymentSuccess] = value3
    const [submit, setSubmit] = useState(false)
    const handleSubmit = () => {
        const addBooking = { ...loggedInUser, ...order, paymentSuccess }
        fetch('https://evening-retreat-30393.herokuapp.com/bookinged', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addBooking)
        })
            .then(res => res.json())
            .then(data => setSubmit(data.insertedCount > 0))
    }

    return (
        <div className='row major p-3'>
            {order
             ? 
            <div className='row'>
                { submit ?
                    <div>
                        <h4>Booking Success</h4>
                    </div>
                    :
                    <div className='row'>
                        <div className='col-md-6 info-part'>
                            <div class="modern-form">
                                <fieldset class='float-label-field'>
                                    <label for="txtName"></label>
                                    <input id="txtName" value={loggedInUser.name} type='text' />
                                </fieldset>

                                <fieldset class='float-label-field'>
                                    <label for="txtEmail" ></label>
                                    <input id="txtEmail" value={loggedInUser.email} type='text' />
                                </fieldset>

                                <fieldset class='float-label-field'>
                                    <label for="txtPassword"></label>
                                    <input id="txtPassword" value={order.name} type='text' />
                                </fieldset>
                            </div>
                        </div>
                        <div className='col-md-6 pay-part'>
                            <h2>Pay with</h2>
                            <PaymentProcess></PaymentProcess>
                            <p className='mt-5'>your Service Charge $<span className='fo'>{order.price}</span> </p>
                        </div>
                        {paymentSuccess && <button onClick={() => handleSubmit()} className='btn btn-primary boon  d-md-flex justify-content-md-end'>Submit</button>}
                    </div>} 
                    </div> 
                    :
                <h3 className='text-center'>No Booking Yet</h3>}
        </div>
    );
};

export default Booking;