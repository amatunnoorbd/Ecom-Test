"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotDealsCard from "../HotDeals/HotDealsCard";
 // Ensure the path is correct

const LatestProduct = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://e-commerce-site-server-ten.vercel.app/products?category=latestProduct");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
      <span>&#8592;</span>
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow next mr-3" onClick={onClick}>
      <span>&#8594;</span>
    </div>
  );

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    initialSlide: 0,
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-7xl mx-auto mb-24">
      <div className="flex justify-between px-4 mb-8">
        <h1 className="text-2xl font-bold">LATEST PRODUCTS</h1>
        <button className="bg-[#AE5721] text-white px-3 rounded-xl">SEE ALL</button>
      </div>

      <div className="w-full pl-5">
        <Slider {...settings}>
          {items.map(item => (
            <HotDealsCard key={item._id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestProduct;
