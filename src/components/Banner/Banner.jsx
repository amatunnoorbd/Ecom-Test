"use client";
import Image from "next/image";

const Banner = () => {
    return (
        <div>
            <Image
                src="https://i.ibb.co/5F4D8GT/bs-banner.webp"
                alt="Banner Image"
                width={1920}
                height={1080}
                layout="responsive"
            />
        </div>
    );
};

export default Banner;
