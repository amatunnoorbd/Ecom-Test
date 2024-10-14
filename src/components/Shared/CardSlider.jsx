"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CardSlider = ({ item, height = 390, imageHeightPercent = 66 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { 
        imge1, 
        image2, 
        title, 
        discount_price, 
        original_price 
    } = item;

    return (
        <div className="border rounded-xl overflow-hidden shadow-2xl shadow-[#ccc3c3]">
            <Link
                href="#"
                className="shadow-lg flex flex-col relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ height: `${height}px` }}  // Dynamic card height
            >
                {/* Image Section */}
                <div
                    className="relative w-full"
                    style={{ height: `${imageHeightPercent}%` }}  // Dynamic image height percentage
                >
                    <Image
                        layout="fill"
                        objectFit="cover"
                        alt="category_1"
                        src={isHovered ? image2 : imge1}
                        className="rounded-t-xl"
                    />
                </div>

                {/* Content Section */}
                <div className="flex-grow mt-auto">
                    <div className="p-2">
                        {/* Title with Single Line Ellipsis */}
                        <h1 className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            {title}
                        </h1>

                        {/* Pricing Section */}
                        <div className="flex gap-2 items-center mt-2">
                            <h1 className="text-lg font-semibold">TK. {discount_price}</h1>
                            <p><s>TK. {original_price}</s></p>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="text-center mb-2 mt-2">
                        <button className="bg-[#eae6e6] font-semibold px-5 py-1 rounded-xl shadow-xl hover:bg-[#9D8068] hover:text-white">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CardSlider;