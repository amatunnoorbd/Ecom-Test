import Image from 'next/image';
import React, { useState } from 'react';
import { BsBookmarkHeart } from 'react-icons/bs';
import DetailsPageImage from './DetailsPageImage';
const sizes = [
    { size: "S", available: 98 },
    { size: "M", available: 45 },
    { size: "L", available: 30 },
    { size: "XL", available: 10 },
];

const ModalContent = () => {

    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1); // Increase quantity by 1
    };
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1); // Decrease quantity by 1 if greater than 1
        }
    };

    return (
        <div className='h-[650px] w-[1150px]'>
            <h1 className='bg-[#d7dae0] text-center py-4 text-2xl font-medium rounded-t-2xl'>Quick View</h1>

            {/* details main section */}
            <div className='flex gap-5 p-5'>
                {/* image part */}
                <div className='w-1/2 z-100 relative '>
                    <DetailsPageImage />
                </div>

                {/* details part */}
                <div className='w-1/2 pl-4'>
                    {/* title */}
                    <h1 className='font-medium text-[#a19393] text-xl'>Premium Solid Shirts for Men I MS-48</h1>

                    {/* Pricing Section */}
                    <div className="flex gap-2 mt-2 text-[#675c5c]">
                        <h1 className="text-3xl font-semibold">TK. 990</h1>
                        <p className='pt-3'><s>TK. 1400</s></p>
                    </div>

                    {/* review section */}
                    <button className='border p-[3px] shadow-xl my-5'>0.0 <span className='text-yellow-400'>★</span> |  0 Reviews</button>

                    <p className='border-b h-2'></p>

                    {/* color section */}
                    <div className='flex gap-2 my-5'>
                        <h1 className='font-semibold'>COLOR:</h1>
                        <div>
                            <p className='text-[#8A8A8A]'>  Maroon</p>
                            <Image
                                className='border-2 p-[1px] border-[#8A8A8A]'
                                height={50}
                                width={50}
                                alt='color-image'
                                src="https://cdn.bitcommerz.com/manfarebd/media/1727609193871-manfarebd-id-13.jpeg"
                            ></Image>
                        </div>
                    </div>

                    {/* size */}
                    <div className='flex gap-8 mt-2 mb-3'>
                        <h1 className='font-semibold'>SIZE:</h1>
                        <div className="size-selector">
                            <div className="flex gap-3 mb-2">
                                {sizes.map((item) => (
                                    <button
                                        key={item.size}
                                        onClick={() => setSelectedSize(item)}
                                        className={`w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center
                                     ${selectedSize.size === item.size
                                                ? "bg-[#AA8C73] text-white border-brown-400"
                                                : "bg-white text-black"
                                            }`}
                                    >
                                        {item.size}
                                    </button>
                                ))}
                            </div>
                            <div className="text-gray-700">{selectedSize.available} available</div>
                        </div>
                    </div>

                    <p className='border-b h-2'></p>

                    {/* quantity and add button */}
                    <div className='my-6 flex gap-4'>

                        {/* quantity */}
                        <div className="flex items-center border border-gray-300 rounded-md w-32">
                            <button onClick={handleDecrease} className="px-4 py-[6px]">
                                -
                            </button>
                            <span className="px-4">{quantity}</span>
                            <button onClick={handleIncrease} className="px-4 py-[6px]">
                                +
                            </button>
                        </div>

                        {/* add to cart */}
                        <button className='bg-[#f3f0f0] px-11 rounded-md shadow-xl font-semibold hover:bg-[#AA8C73] hover:text-white'>Add To Cart</button>

                        {/* Buy Now  */}
                        <button className='bg-[#AA8C73] px-14 rounded-md font-semibold text-white'>Buy Now</button>

                    </div>

                    {/* wishlist */}
                    <div className='font-medium flex items-center gap-1 text-[#877d76]'>
                        <BsBookmarkHeart />
                        <p>ADD TO WISHLIST</p>
                    </div>

                    <div className='text-center mt-5'>
                        <button className='bg-[#AA8C73] px-7 rounded-md font-semibold text-white py-2'>View Full Product Details</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ModalContent;