import React, { useEffect, useState } from 'react'
import "./Tsp-gallery.css"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function TspGallery() {
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
        <section className="gallery" id='TspGallery'>
            <h2 className='title'>Highlights</h2>
            <div className='gallery-items'>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={SlidesView}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="swiper-contanier"
                    data-aos="zoom-in" data-aos-duration="1000"
                >
                    <SwiperSlide className="mySwiper"  key={1}>
                        <img src={require("./../../Assets/img1.jpg")} alt="" className='galleryImg' />
                    </SwiperSlide>
                    <SwiperSlide className="mySwiper" key={2}>
                        <img src={require("./../../Assets/img2.jpg")} alt="" className='galleryImg' />
                    </SwiperSlide>
                    <SwiperSlide className="mySwiper" key={3}>
                        <img src={require("./../../Assets/img3.jpg")} alt="" className='galleryImg' />
                    </SwiperSlide>
                    <SwiperSlide className="mySwiper" key={4}>
                        <img src={require("./../../Assets/img4.jpg")} alt="" className='galleryImg' />
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}

export default TspGallery
