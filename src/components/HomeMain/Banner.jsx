import React from "react";
import { Link } from "react-router-dom";
import BannerImage1 from "../../assets/images/test2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <section className={`banner-section ${className || ""}`}>
        <Swiper {...swiperOptions} className="banner-carousel owl-theme">
          <SwiperSlide className="slide-item">
            <div
              className="bg-image"
              style={{ backgroundImage: `url(${BannerImage1})` }}
            />
            <div className="auto-container">
              <div className="content-box">
                <span className="sub-title animate-1">
                  Od zasilania po automatykę – kompleksowe podejście do
                  elektryki w Twoim domu.
                </span>
                <h1 className="title animate-2">
                  Nowoczesna instalacja dla nowoczesnego domu
                </h1>
                <div className="btn-box animate-3">
                  <Link to="/" className="theme-btn btn-style-one bg-light">
                    <span className="btn-title">
                      Umów się na bezpłatną konsultację
                    </span>
                  </Link>
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
