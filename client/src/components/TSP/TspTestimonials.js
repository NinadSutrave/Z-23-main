import React, {useState, useEffect} from 'react'
// import {quote-left} from '@fortawesome/free-solid-svg-icons'

import './Tsp-Testimonials.css'
import { testItems } from './TspTestimonialItem'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import TspGallery from './TspGallery';


function TspTestimonials() {
    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    });
    const [SlidesView, setSlidesView] = useState(3);
    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        });
    };
    useEffect(() => {
        window.addEventListener("resize", detectSize);
        return () => {
            window.removeEventListener("resize", detectSize);
        };
    }, [windowDimension]);
    useEffect(() => {
        if (windowDimension.winWidth < 799) {
            setSlidesView(1);
        } else {
            setSlidesView(3);
        }
    }, [windowDimension]);
    return (
        <div>
            <section className='testimonials' id='TspTestimonials'>
                <div className='title' data-aos="zoom-out-up" data-aos-duration="2000"> Testimonials</div>
                <div className="wrapper">

                    <Swiper
                        slidesPerView={SlidesView}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="swiper-container"
                        data-aos="zoom-in" data-aos-duration="1500"
                    >
                        {testItems.map((items, index) => {
                            return (
                                <>
                                    <SwiperSlide className="mySwiper" key={index}>
                                        <div className="container_">
                                            <div className="profile">
                                                <div className="ProfileImg">
                                                    <img src={items.url} alt="Profile img" />
                                                </div>
                                                <h2>{items.Name}</h2>
                                            </div>
                                            <p>
                                                {items.des}</p>
                                        </div>
                                    </SwiperSlide>
                                </>
                            );
                        })}
                    </Swiper>
                </div>
                <TspGallery />
            </section>
        </div>
    )
}

export default TspTestimonials