"use client";
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import CardSlider from '../Shared/CardSlider';
import { getProductByCategories } from '@/services/getProdect';


const RelatedProduct = ({categories}) => {
    const [products, setProducts] = useState([]); // State to hold products
    const swiperRef = useRef(null); // Swiper instance reference

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getProductByCategories(categories);
            setProducts(fetchedProducts?.products || []); // Set fetched products
        };
        fetchProducts();
    }, [categories]);

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
        <div className='mb-10 px-[2%]'>

            {/* Swiper Slider Section */}
            <div className='relative  py-2'>
                {products.length > 0 ? (
                    <Swiper
                        ref={swiperRef} // Set swiper reference
                        spaceBetween={50}
                        slidesPerView={4}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Pagination, Autoplay]}
                    >
                        {products?.map((product, idx) => (
                            <SwiperSlide key={idx}>
                                <CardSlider product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className='text-center'>
                        <span className="loading loading-dots loading-lg"></span>
                    </p> // Show loader or fallback message
                )}

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


export default RelatedProduct;