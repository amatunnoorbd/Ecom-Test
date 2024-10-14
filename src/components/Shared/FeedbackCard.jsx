import Image from 'next/image';
import React from 'react';
import user_img from '../Image/panjabi/main_img.jpeg'; // Ensure the correct image path

const FeedbackCard = () => {
    return (
        <div className="p-6 rounded-xl shadow-2xl bg-white border">
            {/* Top Section with Curved Image */}
            <div className="relative h-36 ">
                <div className="absolute w-full h-full rounded-t-xl overflow-hidden">
                    <Image
                        src={user_img}
                        alt="User"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top center" // Focus on the upper middle of the image
                        className="clip-path-custom"
                    />
                </div>
            </div>

            <div className="justify-center flex items-center space-x-1">
                <p className="text-yellow-400 text-lg">★★★★★</p>
            </div>

            {/* User Name */}
            <h3 className="text-lg font-bold mb-1 text-center">Akaşh Møñdât</h3>

            {/* Feedback Text */}
            <p className="text-sm text-gray-600 text-center">
                Fully satisfied great product.
                <br />
                And special thanks to their team for amazing behaviour.
            </p>
        </div>
    );
};

export default FeedbackCard;
