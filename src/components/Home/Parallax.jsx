"use client"; // If you're using Next.js with the app directory
import React from "react";
import bg_img from '../Image/parallex_bg.jpeg'; // Import the image
import parallex from '../Image/parallex.png'; // Import the image
import Image from "next/image";

const Parallax = () => {
  return (
    <div className="mb-10">
      {/* Parallax Section */}
      <div
        className="h-[500px] bg-fixed bg-center bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${bg_img.src})` }} // Correct image usage
      >
        {/* Centered Welcome Box */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
          src={parallex}
          width={700}
          alt="description"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
