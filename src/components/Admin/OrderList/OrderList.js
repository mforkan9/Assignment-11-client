import React, { useEffect, useState } from 'react';
import './OrderList.css'
const OrderList = () => {
    const [allBookingList, setAllBookingList] = useState([])

    useEffect(() => {
        fetch('https://evening-retreat-30393.herokuapp.com/allBookingService')
            .then(res => res.json())
            .then(data => setAllBookingList(data))
    }, [])
    return (
        <div class="limiter">
            <div class="container-table100">
                <div class="wrap-table100">
                    <div class="table100">
                        <table>
                            <thead>
                                <tr class="table100-head">
                                    <th class="column1">Name</th>
                                    <th class="column2">Email ID</th>
                                    <th class="column3">Service</th>
                                    <th class="column4">Pay with</th>
                                    <th class="column5">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allBookingList.map(info => {
                                       return <tr>
                                            <td class="column1">{info.name}</td>
                                            <td class="column2">{info.email}</td>
                                            <td class="column3">{info.title}</td>
                                            <td class="column4">Card</td>
                                            <td class="column5">pending</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;