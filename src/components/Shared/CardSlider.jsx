"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './Modal'; // Import Modal
import ModalContent from './ModalContent';

const CardSlider = ({ item, product, height = 390, imageHeightPercent = 66 }) => {
    const [isHovered, setIsHovered] = useState(false); // Hover state for the image
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { _id, main_image, additional_images, title, discount_price, original_price } = product;

    // Open Modal Only for Add to Cart Button
    const handleAddToCartClick = (event) => {
        event.preventDefault();
        event.stopPropagation(); // Prevent Link propagation
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="border rounded-xl overflow-hidden shadow-2xl shadow-[#ccc3c3]">
                <Link
                    href={`/product/${_id}`}
                    className="shadow-lg flex flex-col relative"
                    style={{ height: `${height}px` }}
                >
                    {/* Image Wrapper with hover logic */}
                    <div
                        className="relative w-full"
                        style={{ height: `${imageHeightPercent}%` }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image
                            layout="fill"
                            objectFit="cover"
                            alt="category_1"
                            src={isHovered ? additional_images[0] : main_image}
                            className="rounded-t-xl"
                        />
                    </div>

                    <div className="flex-grow mt-auto">
                        <div className="p-2">
                            <h1 className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                {title}
                            </h1>
                            <div className="flex gap-2 items-center mt-2">
                                <h1 className="text-lg font-semibold">TK. {discount_price}</h1>
                                <p><s>TK. {original_price}</s></p>
                            </div>
                        </div>

                        <div className="text-center mb-2 mt-2">
                            {/* Wrapper to isolate button from Link */}
                            <div onClick={(e) => e.stopPropagation()}> 
                                <button
                                    className="bg-[#eae6e6] font-semibold px-5 py-1 rounded-xl shadow-xl hover:bg-[#9D8068] hover:text-white"
                                    onClick={handleAddToCartClick}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div>
                    <ModalContent product={product} />
                </div>
            </Modal>
        </>
    );
};

export default CardSlider;
