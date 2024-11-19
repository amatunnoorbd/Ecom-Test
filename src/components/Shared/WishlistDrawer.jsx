"use client";
import { useEffect, useState } from 'react';
import { BsBookmarkHeart } from "react-icons/bs";
import { SiShopify } from "react-icons/si";
import Image from 'next/image';
import Link from 'next/link';


const truncateTitle = (title) => {
    const words = title.split(' ');
    return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : title;
};

const WishlistDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentType, setContentType] = useState('');
    const [cartItemsWishlist, setCartItemsWishlist] = useState([]);
    const [cartItemList, setcartItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(cartItemsWishlist.length);

    // fetch data from wishlist api
    const fetchWishlistItems = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get/wishlist`);
            if (!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();
            setCartItemsWishlist(data.wishlist);
            // console.log(data.wishlist)
        } catch (error) {
            console.error("Error fetching cart items:", error);
        } finally {
            setLoading(false);
        }
    };

    // fetch data from cartItem api
    const fetchCartItems = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get/cartItem`);
            if (!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();
            setcartItemList(data.cartItem);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        } finally {
            setLoading(false);
        }
    };

    // delete items
    const handleDelete = async (listType, id) => {
        console.log(typeof (id));
        const deleted = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/delete/${listType}/${id}`, {
            method: "DELETE",
        }
        );
        const resp = await deleted.json();
        if (resp?.response?.deletedCount > 0) {
            alert(resp?.message)
            fetchWishlistItems();
            fetchCartItems();
        }
    };



    useEffect(() => {
        fetchWishlistItems();
        fetchCartItems();
    }, []);




    const toggleDrawer = (type) => {
        setContentType(type);
        setIsOpen(true);
    };

    const closeDrawer = () => setIsOpen(false);


    // Remove item function



    // Calculate total price
    const totalPrice = cartItemList.reduce((total, item) => {
        const price = parseFloat(item.discount_price || 0); // Ensure valid number
        return total + price;
    }, 0);


    const renderHeader = () => {
        if (contentType === 'wishlist') {
            return <p className="font-semibold text-[17px] text-black">Wish List Items</p>;
        } else if (contentType === 'items') {
            return (
                <div className="flex items-center gap-1">
                    <SiShopify className="text-2xl" />
                    <p className="text-xl font-semibold text-black">{cartItemList.length} Items</p>
                </div>
            );
        }
    };

    const renderContent = () => {

        if (contentType === 'wishlist') {
            return cartItemsWishlist.length === 0 ? (
                <p className="text-center text-gray-500 mt-5">Empty Wish List</p>
            ) : (
                <div className="text-black text-sm space-y-3">
                    {cartItemsWishlist?.map((item, idx) => (
                        <div key={idx} className="relative flex gap-4 border p-1 shadow-xl">
                            <Image
                                width={90}
                                height={80}
                                alt="product_img"
                                src={item.
                                    main_image}
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
                                onClick={() => handleDelete("wishlist", item._id)}
                                className="z-10 border-2 border-white absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-[#5c5757] text-white font-semibold hover:bg-gray-800 transition"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            );
        }

        else if (contentType === 'items') {
            return cartItemList.length === 0 ? (
                <p className="text-center text-gray-500 mt-5">Empty Cart</p>
            ) : (
                <div className="h-screen pb-28 flex flex-col justify-between text-black text-sm">
                    <div className="space-y-4">
                        {cartItemList?.map((item, idx) => (
                            <div key={idx} className="relative flex gap-4 p-1 shadow-xl">
                                <Image
                                    width={90}
                                    height={80}
                                    alt="product_img"
                                    src={item.main_image}
                                    className="rounded-xl"
                                />
                                <div className="space-y-1 pt-1">
                                    <h1 className="font-semibold">{truncateTitle(item.title)}</h1>
                                    <p className="font-semibold">TK. {item.discount_price}</p>
                                    <p className="font-semibold">Size: XL</p>
                                </div>
                                <button
                                    onClick={() => handleDelete("cartItem", item._id)}
                                    className="z-10 border-2 border-white absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-[#5c5757] text-white font-semibold hover:bg-gray-800 transition"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
         
                        <button>
                            <a
                                href="/checkout"
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
            <div className='relative'>
                <BsBookmarkHeart className="text-2xl cursor-pointer" onClick={() => toggleDrawer('wishlist')} />
                <div
                    className="absolute -bottom-2 -right-2 bg-[#745838] text-white flex items-center justify-center rounded-full text-sm"
                    style={{ width: '20px', height: '20px' }}
                >
                    <span>{cartItemsWishlist.length}</span>
                </div>

            </div>
            <button
                className="shadow bg-[#46351F] z-40 fixed top-1/2 right-0 h-[82px] w-[65px] flex justify-between flex-col"
                onClick={() => toggleDrawer('items')}
            >
                <div className="text-yellow-400 pt-[5px] flex flex-col justify-center w-full items-center">
                    <SiShopify className="text-2xl" />
                    <p className="text-sm">{cartItemList.length} items</p>
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
                className={`rounded-xl z-50 fixed top-0 right-0 h-screen w-[380px] bg-white transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
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
