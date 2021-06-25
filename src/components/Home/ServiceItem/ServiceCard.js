import React, { useContext, useEffect, useState } from 'react';
import './ServiceCard.css'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper/core';
import { ContextUser } from '../../../App';
import OrderList from '../../Admin/OrderList/OrderList';
SwiperCore.use([Pagination, Autoplay]);

const ServiceCard = () => {
    const {value2} = useContext(ContextUser)
    const  [order,setOrder] = value2
    const handleOrder = (item) =>{
        setOrder(item)
    }

    const [serviceData,setServiceData] = useState([])

    useEffect(() =>{
        fetch('https://evening-retreat-30393.herokuapp.com/serviceShow')
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[])

    return (
        <div style={{height:'510px'}}>
            <Swiper
             slidesPerView={3}
              spaceBetween={40} 
              freeMode={true}
               pagination={{ "clickable": true }}
               breakpoints={{
                500:{
                    width:450,
                    slidesPerView:1
                   },
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                720: {
                  width: 720,
                  slidesPerView: 2,
                },
                960:{
                    width:1000,
                    slidesPerView:3
                }
              }}
               className=" swiper-container "
               >
                {
                    serviceData.map(infor => (
                        <SwiperSlide>
                            <div class="card  rounded-3">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src={`data:image/jpeg;base64,${infor.image.img}`} class="img-fluid  p-3" />
                                    <a href="#!">
                                        <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title text-center">{infor.name}</h3>
                                    <p class="card-text text-center">
                                        {infor.description}
                                    </p>
                                    <Link to="/About/order"  style={{textDecoration:'none'}}>
                                    <a href="#!"class="btn btn-primary d-grid gap-2 col-6 mx-auto" onClick={() =>handleOrder(infor)}>Book</a>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default ServiceCard;