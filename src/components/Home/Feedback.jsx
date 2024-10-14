"use client"
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import FeedbackCard from '../Shared/FeedbackCard';


const Feedback = () => {

    const swiperRef = useRef(null); // Using useRef to hold the Swiper instance

    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev(); // Navigate to the previous slide
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext(); // Navigate to the next slide
        }
    };

    return (
        <div className='my-14 mx-[4.5%]'>
            <div className='text-center mb-3'>
                <h1 className='text-2xl font-semibold'>Customer Review</h1>
                <p>What our customer think about us</p>
            </div>

            {/* Swiper Slider Section */}
            <div className='relative py-2'>
                <Swiper
                
                    ref={swiperRef} // Set the ref here
                    spaceBetween={40} // Gap between cards
                    slidesPerView={5} // Number of visible slides
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                >
                    {[1,2,3,4,5,6,7,8].map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <FeedbackCard  />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Arrow Buttons */}
                <div className="custom-arrow prev" onClick={handlePrevClick}>
                    <span>&lt;</span>
                </div>
                <div className="custom-arrow next" onClick={handleNextClick}>
                    <span>&gt;</span>
                </div>
            </div>


        </div>
    );
};

export default Feedback;