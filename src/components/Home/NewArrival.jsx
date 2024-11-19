"use client";
import { useEffect, useRef, useState } from 'react';
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
import { getProducts } from '@/services/getProdect';

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
    const [products, setProducts] = useState([]); // State to hold products
    const swiperRef = useRef(null); // Swiper instance reference

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts?.products || []);
        };
        fetchProducts();
    }, []);

    // Ensure Swiper updates properly after products load
    useEffect(() => {
        if (swiperRef.current && products.length > 0) {
            swiperRef.current.swiper.update(); // Update swiper after products change
        }
    }, [products]);

    const handlePrevClick = () => {
        swiperRef.current?.swiper.slidePrev(); // Navigate to previous slide
    };

    const handleNextClick = () => {
        swiperRef.current?.swiper.slideNext(); // Navigate to next slide
    };

    return (
        <div className='px-[4.5%] mb-10'>
            <CommonHeading
                title="NEW ARRIVAL PRODUCTS"
                view="yes"
            />

            {/* Swiper Slider Section */}
            <div className='relative py-2'>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={4}
                    autoplay={{
                        delay: 222500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                >
                    {products.length > 0 ? (
                        [...products]?.reverse().map((product, idx) => (
                            <SwiperSlide key={idx}>
                                <CardSlider product={product} />
                            </SwiperSlide>
                        ))
                    ) : (
                        [...Array(4)].map((_, idx) => (
                            <SwiperSlide key={idx}>
                                <CardSlider isLoading /> {/* Show skeleton */}
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>

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