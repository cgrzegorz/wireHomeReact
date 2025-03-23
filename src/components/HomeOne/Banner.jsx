import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage1 from '../../assets/images/main-slider/8.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        clickable: true,
    },
};

function Banner({ className }) {
    return (
        <>
            <section className={`banner-section ${className || ''}`}>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${BannerImage1})`}}/>
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1">WE HELP YOU ELECTRICAL SEVICES</span>
                                <h1 className="title animate-2">We Build Quality <br />Electrician.</h1>
                                <h2 className="title-stroke animate-3">ELECTIC</h2>
                                <div className="btn-box animate-3">
                                    <Link to="/page-contact" className="theme-btn btn-style-one bg-light"><span className="btn-title">CONTACT US NOW</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${BannerImage1})`}}/>
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1">WE HELP YOU ELECTRICAL SEVICES</span>
                                <h1 className="title animate-2">We Build Quality <br />Electrician.</h1>
                                <h2 className="title-stroke animate-3">ELECTIC</h2>
                                <div className="btn-box animate-3">
                                    <Link to="/page-contact" className="theme-btn btn-style-one bg-light"><span className="btn-title">CONTACT US NOW</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${BannerImage1})`}}/>
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1">WE HELP YOU ELECTRICAL SEVICES</span>
                                <h1 className="title animate-2">We Build Quality <br />Electrician.</h1>
                                <h2 className="title-stroke animate-3">ELECTIC</h2>
                                <div className="btn-box animate-3">
                                    <Link to="/page-contact" className="theme-btn btn-style-one bg-light"><span className="btn-title">CONTACT US NOW</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}

export default Banner;
