import React, { useEffect, useState } from 'react';
import './Testimonial.css'
import image1 from './565-5658381_login-icon-png-clipart.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper/core';
SwiperCore.use([Pagination, Autoplay]);
const Testimonial = () => {
    const [reviewData, setReviewData] = useState([])

    useEffect(() => {
        fetch('https://evening-retreat-30393.herokuapp.com/reviewShow')
            .then(res => res.json())
            .then(data => setReviewData(data))
    }, [])
    return (
        <div className='test-body'>
            <h1>Testimonials</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                freeMode={true}
                pagination={{ "clickable": true }}
                breakpoints={{
                    500: {
                        width: 450,
                        slidesPerView: 1
                    },
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    720: {
                        width: 720,
                        slidesPerView: 2,
                    },
                    960: {
                        width: 1000,
                        slidesPerView: 3
                    }
                }}
                className="mySwiper"
            >
                <div className="row">
                    {
                        reviewData.map(inrv => (
                            <SwiperSlide>
                                <div className="col-md-4">
                                    <div className="single-box">
                                        <div className="img-area">
                                            <img src={image1} alt="" srcset="" />
                                        </div>
                                        <div className="img-text">
                                            <h2>{inrv.name}</h2>
                                            <h5>{inrv.company}</h5>
                                            <p>{inrv.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>

        </div>
    );
};

export default Testimonial;