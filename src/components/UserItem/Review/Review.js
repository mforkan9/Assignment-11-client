import React, { useState } from 'react';
import './Review.css'
import imgR from './download.png'
const Review = () => {
    const [reviewInfo,setReviewInfo] = useState({})
    const [reviewSend,setReviewSend] = useState(false)
    const handleReviewBlur = (e) =>{
        const newReview = {...reviewInfo}
        newReview[e.target.name] = e.target.value
        setReviewInfo(newReview)
    }
    const handleSendReview = (e) =>{
        const reviewAdd = reviewInfo
        fetch('https://evening-retreat-30393.herokuapp.com/review',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewAdd)
        })
            .then(res => res.json())
            .then(data =>setReviewSend(data))
        e.preventDefault()
    }
    return (
        <div className='add-body'>
            <h4 className='text-center'>Review</h4>
            {reviewSend ? 
                <div>
                <img style={{height:'400px',width:'45%',marginLeft:'250px'}} src={imgR} className='mt-3' alt="Success" srcset="" />
                <h3 className='text-center text-success m-3'>Review Send Successful</h3>
           </div>
            :
            <form onSubmit={handleSendReview}>
                <div className="row p-3">
                <div class="col-md-6">
                        <h6 style={{ fontWeight: '700' }}>Service Name</h6>
                        <input onBlur={handleReviewBlur} type="text" required class="form-control" placeholder="Name" aria-label="First name" name="name" />
                    </div>
                    <div class="col-md-6">
                        <h6 style={{ fontWeight: '700' }}>Service Name</h6>
                        <input onBlur={handleReviewBlur} type="text" required class="form-control" placeholder="Company Name" aria-label="First name" name="company" />
                    </div>
                </div>
                <div className='col-md-6 mt-3 p-3'>
                        <h6 style={{ fontWeight: '700' }}>Description</h6>
                        <textarea onBlur={handleReviewBlur} style={{ borderRadius: '10px',width:'100%' }} name="description" required id="" cols="52" placeholder='Description' rows="6"></textarea>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className='btn btn-primary' type='submit' >SEND</button>
                </div>
            </form>}
        </div>
    );
};

export default Review;