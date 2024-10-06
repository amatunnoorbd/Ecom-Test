"use client"; // Ensure this component is treated as a client component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
// import CommonCard from "../CommonCard";
import HotDealsCard from "../HotDeals/HotDealsCard";

const Others = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://e-commerce-site-server-ten.vercel.app/products?category=others`);
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

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-7xl mx-auto mb-24">
      <div className="flex justify-between px-4 mb-8">
        <h1 className="text-2xl font-bold">OTHERS</h1>
        <button className="bg-[#AE5721] text-white px-3 rounded-xl">SEE ALL</button>
      </div>

      <div className="w-full pl-5">
        <div className="flex gap-4">
          {items.map(item => (
            <HotDealsCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Others;
