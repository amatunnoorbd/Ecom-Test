"use client";
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import CommonHeading from '../Shared/CommonHeading';
import CardSlider from '../Shared/CardSlider';
import { getProducts } from '@/services/getProdect';

const Bestselling = () => {
    const [products, setProducts] = useState([]); // State to hold products
    const swiperRef = useRef(null); // Swiper instance reference

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts?.products || []);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (swiperRef.current && products.length > 0) {
            swiperRef.current.swiper.update(); // Update swiper after products change
        }
    }, [products]);

    const handlePrevClick = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const handleNextClick = () => {
        swiperRef.current?.swiper.slideNext();
    };

    return (
        <div className='px-[4.5%] mb-10'>
            <CommonHeading title="BEST SELLING PRODUCT" view="yes" />

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
                        products.map((product, idx) => (
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

export default Bestselling;
