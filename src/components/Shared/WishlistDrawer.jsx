"use client";
import { useState } from 'react';
import { BsBookmarkHeart } from "react-icons/bs";
import { SiShopify } from "react-icons/si";
import card_1 from '../Image/NewArrival/card_1.jpeg';
import card_11 from '../Image/NewArrival/card_1(1).jpeg';
import card_2 from '../Image/NewArrival/card_2.jpeg';
import card_22 from '../Image/NewArrival/card_2(2).jpeg';
import Image from 'next/image';

// Sample cart items
const initialCartItems = [
    {
        imge1: card_1,
        image2: card_11,
        title: "Summer Denim Shirts for Men | MS-11 Limited Edition",
        discount_price: 900,
        original_price: 1400,
    },
    {
        imge1: card_2,
        image2: card_22,
        title: "Trendy Casual Shirts with Amazing Fit for Everyday Wear",
        discount_price: 900,
        original_price: 1400,
    },
];

const truncateTitle = (title) => {
    const words = title.split(' ');
    return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : title;
};

const WishlistDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentType, setContentType] = useState('');
    const [cartItems, setCartItems] = useState(initialCartItems);

    const toggleDrawer = (type) => {
        setContentType(type);
        setIsOpen(true);
    };

    const closeDrawer = () => setIsOpen(false);

    const removeItem = (index) => {
        const updatedItems = cartItems.filter((_, idx) => idx !== index);
        setCartItems(updatedItems);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.discount_price, 0);

    const renderHeader = () => {
        if (contentType === 'wishlist') {
            return <p className="font-semibold text-[17px] text-black">Wish List Items</p>;
        } else if (contentType === 'items') {
            return (
                <div className="flex items-center gap-1">
                    <SiShopify className="text-2xl" />
                    <p className="text-xl font-semibold text-black">{cartItems.length} Items</p>
                </div>
            );
        }
    };

    const renderContent = () => {
        if (contentType === 'wishlist') {
            return cartItems.length === 0 ? (
                <p className="text-center text-gray-500 mt-5">Empty Wish List</p>
            ) : (
                <div className="text-black text-sm space-y-3">
                    {cartItems.map((item, idx) => (
                        <div key={idx} className="relative flex gap-4 border p-1 shadow-xl">
                            <Image
                                width={90}
                                height={80}
                                alt="product_img"
                                src={item.imge1}
                                className="rounded-xl"
                            />
                            <div className="space-y-1">
                                <h1 className="font-semibold">{truncateTitle(item.title)}</h1>
                                <p className="font-semibold pb-1">TK. {item.discount_price}</p>
                                <button className="bg-[#9f7e64] font-bold text-white px-3 py-[3px] rounded-xl">
                                    Add To Cart
                                </button>
                            </div>
                            <button
                                onClick={() => removeItem(idx)}
                                className="z-10 border-2 border-white absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-[#5c5757] text-white font-semibold hover:bg-gray-800 transition"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            );
        } else if (contentType === 'items') {
            return cartItems.length === 0 ? (
                <p className="text-center text-gray-500 mt-5">Empty Cart</p>
            ) : (
                <div className="h-screen pb-28 flex flex-col justify-between text-black text-sm">
                    <div className="space-y-4">
                        {cartItems.map((item, idx) => (
                            <div key={idx} className="relative flex gap-4 p-1 shadow-xl">
                                <Image
                                    width={90}
                                    height={80}
                                    alt="product_img"
                                    src={item.imge1}
                                    className="rounded-xl"
                                />
                                <div className="space-y-1 pt-1">
                                    <h1 className="font-semibold">{truncateTitle(item.title)}</h1>
                                    <p className="font-semibold">TK. {item.discount_price}</p>
                                    <p className="font-semibold">Size: XL</p>
                                </div>
                                <button
                                    onClick={() => removeItem(idx)}
                                    className="z-10 border-2 border-white absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-[#5c5757] text-white font-semibold hover:bg-gray-800 transition"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                    <button>
                        <a
                            href="#_"
                            className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                        >
                            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                            </span>
                            <span className="relative text-white">Place Order</span>
                        </a>
                    </button>
                </div>
            );
        }
    };

    return (
        <div className="relative">
            <BsBookmarkHeart className="text-2xl cursor-pointer" onClick={() => toggleDrawer('wishlist')} />
            <button
                className="shadow bg-[#46351F] z-40 fixed top-1/2 right-0 h-[82px] w-[65px] flex justify-between flex-col"
                onClick={() => toggleDrawer('items')}
            >
                <div className="text-yellow-400 pt-[5px] flex flex-col justify-center w-full items-center">
                    <SiShopify className="text-2xl" />
                    <p className="text-sm">{cartItems.length} items</p>
                </div>
                <p className="text-white bg-black text-sm font-semibold py-[2px] w-full">TK {totalPrice}</p>
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 z-40"
                    onClick={closeDrawer}
                ></div>
            )}

            <div
                className={`rounded-xl z-50 fixed top-0 right-0 h-screen w-[380px] bg-white transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="rounded-tl-xl px-6 h-16 flex justify-between items-center border-b bg-[#dbd4d6]">
                    {renderHeader()}
                    <button
                        onClick={closeDrawer}
                        className="text-black text-base border border-[#9d9191] px-2 rounded-lg"
                    >
                        Close
                    </button>
                </div>
                <div className="p-4">{renderContent()}</div>
            </div>
        </div>
    );
};

export default WishlistDrawer;
