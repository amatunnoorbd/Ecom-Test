"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// import image 
import slider1 from '../Image/slider1.jpeg';
// import slider2 from '../Image/slider2.jpeg';
import slider3 from '../Image/slider3.jpeg';
import Image from 'next/image';

const Banner = () => {
    return (
        <>
            <Swiper
                pagination={{ clickable: true }} // Make pagination clickable
                autoplay={{
                    delay: 2500, // Time in milliseconds before switching to the next slide
                    disableOnInteraction: false // Allow autoplay to continue after user interactions
                }}
                loop={true} // Enable infinite loop
                modules={[Pagination, Autoplay]} // Include Autoplay module
                className="mySwiper"
            >
                {/* Add your image sources here */}
                <SwiperSlide>
                    <Image
                        src={slider1}
                        width={2000}
                        alt='slide1 '
                    ></Image>
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src={slider3}
                        width={2000}
                        alt='slide1 '
                    ></Image>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
