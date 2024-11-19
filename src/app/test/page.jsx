"use client"
import Image from "next/image";
import { useState } from "react";

const TestPage = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const images = [
        { id: 1, src: "https://cdn.bitcommerz.com/manfarebd/media/1716831958792-manfarebd-id-13.jpeg", alt: "Image 1" },
        { id: 2, src: "https://cdn.bitcommerz.com/manfarebd/media/1727537289011-manfarebd-id-13.jpeg", alt: "Image 2" },
        { id: 3, src: "https://cdn.bitcommerz.com/manfarebd/media/1716827800052-manfarebd-id-13.jpeg", alt: "Image 3" },
    ];

    const toggleSelection = (id) => {
        setSelectedImages((prev) =>
            prev.includes(id) ? prev.filter((img) => img !== id) : [...prev, id]
        );
    };

    const handleSubmit = () => {
        alert(`Selected Images: ${selectedImages.join(", ")}`);
    };

    return (
        <div className="flex justify-center my-14 ">
            <div className="shadow-xl bg-gray-100 border w-[500px] h-[300px] p-6 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">Select Your Favorite Images</h1>
                <div className="grid grid-cols-3 gap-4">
                    {images?.map((image) => (
                        <div
                            key={image.id}
                            onClick={() => toggleSelection(image.id)}
                            className={`cursor-pointer border-4  overflow-hidden ${selectedImages.includes(image.id)
                                ? "border-green-500"
                                : "border-transparent"
                                }`}
                        >
                            <Image
                                width={70}
                                height={70}
                                src={image.src}
                                alt={image.alt}
                                className="" />
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleSubmit}
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Submit Selection
                </button>
            </div>
        </div>
    );
};

export default TestPage;