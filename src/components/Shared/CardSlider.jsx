"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './Modal';
import ModalContent from './ModalContent';

// Skeleton Loader Component
const SkeletonCard = ({ height = 390, imageHeightPercent = 66 }) => (
    <div className="border rounded-xl overflow-hidden shadow-2xl animate-pulse bg-gray-200" style={{ height }}>
        <div className="relative w-full" style={{ height: `${imageHeightPercent}%` }}>
            <div className="w-full h-full bg-gray-400" />
        </div>
        <div className="p-2">
            <div className="h-4 bg-gray-500 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>

        <div className="text-center mt-5">
            <button
                className="px-5 py-1 rounded-xl bg-gray-600 h-6 w-20"        
            >
            </button>
        </div>

    </div>
);

const CardSlider = ({ product, height = 390, imageHeightPercent = 66 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // console.log(product)

    if (!product) {
        return <SkeletonCard height={height} imageHeightPercent={imageHeightPercent} />;
    }

    const { _id, main_image, additional_images, title, discount_price, original_price } = product;

    const handleAddToCartClick = (event) => {
        event.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="border rounded-xl overflow-hidden shadow-2xl">
                <Link href={`/product/${_id}`} className="flex flex-col relative" style={{ height }}>
                    <div
                        className="relative w-full"
                        style={{ height: `${imageHeightPercent}%` }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image
                            layout="fill"
                            objectFit="cover"
                            alt={title}
                            src={isHovered ? additional_images[0] : main_image}
                            className="rounded-t-xl"
                        />
                    </div>
                    <div className="text-left flex-grow mt-auto p-2">
                        <h1 className="font-semibold text-ellipsis whitespace-nowrap overflow-hidden">{title}</h1>
                        <div className="flex gap-2 items-center mt-2">
                            <h1 className="text-lg font-semibold">TK. {discount_price}</h1>
                            <p><s>TK. {original_price}</s></p>
                        </div>
                    </div>
                    <div className="text-center mb-2 mt-2">
                        <button
                            className="bg-[#eae6e6] font-semibold px-5 py-1 rounded-xl hover:bg-[#9D8068] hover:text-white"
                            onClick={handleAddToCartClick}
                        >
                            Add to Cart
                        </button>
                    </div>
                </Link>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalContent product={product} />
            </Modal>
        </>
    );
};

export default CardSlider;
