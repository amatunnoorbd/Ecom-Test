"use client";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import CommonHeading from '../Shared/CommonHeading';
import CardSlider from '../Shared/CardSlider';
// import image
import card_1 from '../Image/NewArrival/card_1.jpeg';
import card_11 from '../Image/NewArrival/card_1(1).jpeg';
import card_2 from '../Image/NewArrival/card_2.jpeg';
import card_22 from '../Image/NewArrival/card_2(2).jpeg';
import card_3 from '../Image/NewArrival/card_3.jpeg';
import card_33 from '../Image/NewArrival/card_3(3).jpeg';
import card_4 from '../Image/bestselling/card_4.jpeg';
import card_44 from '../Image/bestselling/card_4(4).jpeg';
import card_5 from '../Image/bestselling/card_5.jpeg';
import card_55 from '../Image/bestselling/card_5(5).jpeg';
import card_6 from '../Image/bestselling/card_6.jpeg';
import card_66 from '../Image/bestselling/card_6(6).jpeg';
import category_1 from '../Image/category_1.jpeg';
import category_2 from '../Image/category_2.jpeg';

const items = [
    {
        imge1: card_5,
        image2: card_55,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_6,
        image2: card_66,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_1,
        image2: card_11,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_2,
        image2: card_22,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_3,
        image2: card_33,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_4,
        image2: card_44,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    
    {
        imge1: category_1,
        image2: category_2,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
]

const NewArrival = () => {
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
        <div className='px-[4.5%] mb-10'>
            <CommonHeading
                title="BEST SELLING PRODUCT"
                view="yes"
            />

            {/* Swiper Slider Section */}
            <div className='relative py-2'>
                <Swiper
                    ref={swiperRef} // Set the ref here
                    spaceBetween={50} // Gap between cards
                    slidesPerView={4} // Number of visible slides
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                >
                    {items.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <CardSlider item={item} />
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


export default NewArrival;