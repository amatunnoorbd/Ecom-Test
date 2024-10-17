"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { RiUserLine } from "react-icons/ri";
import { LiaClipboardListSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";

const UserDashboard = ({ children }) => {
    const [selected, setSelected] = useState('profile'); // State to manage the selected link

    // Handler to set the selected link
    const handleSelect = (link) => {
        setSelected(link);
    };

    return (
        <div className="flex min-h-screen">

            <div className="w-60 p-4">
                <h1 className='font-semibold text-lg mb-4'>Home / My Account</h1>
                <div className="space-y-3 border border-[#ebe6e6] flex flex-col">
                    {/* profile */}
                    <Link href="/user"
                        onClick={() => handleSelect('profile')}
                        className={`flex gap-4 px-5 items-center h-12 w-full font-semibold ${selected === 'profile' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
                    >
                        <span
                            className={`text-xl ${selected === 'profile' ? 'bg-[#a3866e] w-9 h-9 rounded-full flex items-center justify-center' : ''}`}>
                            <RiUserLine className={`${selected === 'profile' ? 'text-white' : ''}`} />
                        </span>
                        My Profile
                    </Link>

                    {/* order */}
                    <Link href="/user/orders"
                        onClick={() => handleSelect('orders')}
                        className={`flex gap-4 px-5 items-center h-12 w-full font-semibold ${selected === 'orders' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
                    >
                        <span
                            className={`text-xl ${selected === 'orders' ? 'bg-[#a3866e] w-9 h-9 rounded-full flex items-center justify-center' : ''}`}>
                            <LiaClipboardListSolid className={`${selected === 'orders' ? 'text-white' : ''}`} />
                        </span>
                        My Orders
                    </Link>

                    {/* Review */}
                    <Link href="/user/reviews"
                        onClick={() => handleSelect('reviews')}
                        className={`flex gap-4 px-5 items-center h-12 w-full font-semibold ${selected === 'reviews' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
                    >
                        <span
                            className={`text-xl ${selected === 'reviews' ? 'bg-[#a3866e] w-9 h-9 rounded-full flex items-center justify-center' : ''}`}>
                            <CiStar className={`${selected === 'reviews' ? 'text-white' : ''}`} />
                        </span>
                        My Reviews
                    </Link>

                    {/* logout */}
                    <Link href="#"
                        onClick={() => handleSelect('logout')}
                        className={`flex gap-4 px-5 items-center h-12 w-full font-semibold ${selected === 'logout' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
                    >
                        <span
                            className={`text-xl ${selected === 'logout' ? 'bg-[#a3866e] w-9 h-9 rounded-full flex items-center justify-center' : ''}`}>
                            <FiLogOut className={`${selected === 'logout' ? 'text-white' : ''}`} />
                        </span>
                        Logout
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
