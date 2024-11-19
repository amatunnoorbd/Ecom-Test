"use client";
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import main_img from '../Image/panjabi/image_main.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import CardSlider from '../Shared/CardSlider';
import { getProductByCategories } from '@/services/getProdect';

const Panjabi = () => {
    const [products, setProducts] = useState([]); // State to hold products
    const swiperRef = useRef(null); // Swiper instance reference
    console.log(products);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getProductByCategories("panjabi");
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
        <div className='bg-[#e8e2e2] flex items-center mt-20 mb-12 mx-[4.5%] h-[490px]'>
            {/* Main Image Section */}
            <div className='w-[29%]'>
                <Image
                    src={main_img}
                    alt="main_img"
                    width={350}
                    height={490}
                    objectFit="cover"
                />
            </div>

            {/* Swiper Slider Section */}
            <div className='relative w-[71%] bg-[#e8e2e2] pr-10 py-1'>
                {products.length > 0 ? (
                    <Swiper
                        ref={swiperRef} // Set swiper reference
                        spaceBetween={50}
                        slidesPerView={3}
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

export default Panjabi;
