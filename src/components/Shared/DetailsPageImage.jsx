"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
    "https://cdn.bitcommerz.com/manfarebd/media/1720199008175-manfarebd-id-13.jpeg",
    "https://cdn.bitcommerz.com/manfarebd/media/1727609193871-manfarebd-id-13.jpeg",
    "https://cdn.bitcommerz.com/manfarebd/media/1727609197283-manfarebd-id-13.jpeg",
    "https://cdn.bitcommerz.com/manfarebd/media/1727609200772-manfarebd-id-13.jpeg",
];

const DetailsPageImage = () => {
    const [mainImage, setMainImage] = useState(images[0]);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [showZoom, setShowZoom] = useState(false); // জুম ইমেজ লুকানো/দেখানোর জন্য state

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPosition({ x, y });
        setShowZoom(true); // মাউস মুভ করলে দেখাবে
    };

    const handleMouseLeave = () => {
        setShowZoom(false); // মাউস সরালে লুকিয়ে ফেলবে
    };

    return (
        <div className="relative">
            <div className="flex">
                {/* থাম্বনেইল ইমেজ */}
                <div className="flex flex-col gap-2 mr-3">
                    {images.map((img, idx) => (
                        <div key={idx} className="cursor-pointer ">
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

                {/* মেইন ইমেজ */}
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
                    />
                </div>

            </div>

            {/* ফিক্সড জুমড ইমেজ */}
            {
                showZoom && ( // মাউস মুভ করার পরই শুধু দেখাবে
                    <div
                        className="fixedZoomImage absolute -right-[550px] top-0 z-10"
                        style={{
                            backgroundImage: `url(${mainImage})`,
                            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                            backgroundSize: "300%",
                        }}
                    ></div>
                )
            }

        </div>


    );
};

export default DetailsPageImage;
