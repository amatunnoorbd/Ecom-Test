"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HotDealsCard = ({ item, onClick }) => {
  const { _id, name, image, image2, price, add_to_cart } = item;
  const [isHovered, setIsHovered] = useState(false);

  const truncateName = (name) => {
    const words = name.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ") + "...";
    }
    return name;
  };

  return (
    <Link href={`/details/${_id}`} passHref>
      <div
        className="border w-[200px] h-[380px] flex flex-col justify-between hover:border-red-500 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onClick(item)}
      >
        <div className="relative w-full h-[240px]"> {/* Fixed height for the image container */}
          <Image
            src={isHovered && image2 ? image2 : image}
            alt={name}
            width={200} // Fixed width for the image
            height={240} // Fixed height for the image
            className="rounded-t" // Optional: for rounded corners
            objectFit="cover" // Ensures the image covers the entire area
          />
        </div>
        <div className="space-y-3">
          <div className="pl-4">
            <h1 className="text-lg font-semibold">{truncateName(name)}</h1>
            <h1 className="text-lg font-bold">TK {price}</h1>
          </div>
          {add_to_cart && (
            <button className="w-full bg-black py-1 font-semibold text-white">
              Add To Cart
            </button>
          )}
          <button className="w-full bg-[#CC6F30] py-1 font-semibold text-white">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotDealsCard;
