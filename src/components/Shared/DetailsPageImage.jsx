"use client";
import { useState } from "react";
import Image from "next/image";

const DetailsPageImage = ({ additional_images, main_image }) => {
    // Combine main_image with additional_images for thumbnails
    const images = [main_image, ...additional_images];
    console.log(images)
    
    const [mainImage, setMainImage] = useState(main_image);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [showZoom, setShowZoom] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPosition({ x, y });
        setShowZoom(true);
    };

    const handleMouseLeave = () => {
        setShowZoom(false);
    };

    return (
        <div className="relative">
            <div className="flex">
                {/* Thumbnail Images */}
                <div className="flex flex-col gap-2 mr-3">
                    {images.map((img, idx) => (
                        <div key={idx} className="cursor-pointer">
                            <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                width={120}
                                height={120}
                                onClick={() => setMainImage(img)}
                                className=""
                            />
                        </div>
                    ))}
                </div>

                {/* Main Image */}
                <div
                    className="relative w-[550px] h-[549px] overflow-hidden"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image
                        src={mainImage}
                        alt="Main Product"
                        layout="fill"
                        objectFit="cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>

            {/* Zoomed Image */}
            {showZoom && (
                <div
                    className="fixedZoomImage absolute -right-[550px] top-0 z-10"
                    style={{
                        backgroundImage: `url(${mainImage})`,
                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        backgroundSize: "300%",
                    }}
                ></div>
            )}
        </div>
    );
};

export default DetailsPageImage;
