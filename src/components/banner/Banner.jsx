import React from "react";
import "../banner/Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/carousel1.jpg";
import img2 from "../../assets/carousel2.jpeg";
import img3 from "../../assets/carousel3.jpg";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <Swiper
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="banner__swiper"
        >
          <SwiperSlide className="banner__item">
            <img src={img1} alt="nature" />
            <div className="banner__content">
              <h4>WELCOME TO GREENSHOP</h4>
              <h2>
                LET'S MAKE A BATTER <span>PLANET</span>
              </h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button>SHOP NOW</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner__item">
            <img src={img2} alt="nature" />
            <div className="banner__content">
              <h4>WELCOME TO GREENSHOP</h4>
              <h2>
                LET'S MAKE A BATTER <span>PLANET</span>
              </h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button>SHOP NOW</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner__item">
            <img src={img3} alt="nature" />
            <div className="banner__content">
              <h4>WELCOME TO GREENSHOP</h4>
              <h2>
                LET'S MAKE A BATTER <span>PLANET</span>
              </h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button>SHOP NOW</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
