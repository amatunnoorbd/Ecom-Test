"use client";
import Image from 'next/image';
import { FiPhone, FiSearch } from 'react-icons/fi';
import { LuUser2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import image from '../Image/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Modal from './Modal';
import LoginPageDesign from '../Authentication/LoginPageDesign';
import { useEffect, useState } from 'react';
import WishlistDrawer from './WishlistDrawer';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';
import axios from 'axios';
import SearchResult from './SearchResult';

const Navbar = () => {
    const pathName = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const session = useSession();
    console.log(session);

    const [data, setData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    console.log(data);
    console.log(filteredResults)

    // Data fetch korar jonno useEffect use korbo
    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
            setData(res.data.products); // Fetched data state e set kora
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    // Search input change howar sathe sathe filter korbo
    const handleSearchChange = (e) => {
        const value = e.target.value;
        if (value) {
            // Regular expression diye title er sathe partial match check korbo
            const regex = new RegExp(value, 'i'); // 'i' flag diye case-insensitive match korchi
            const results = data.filter(item => regex.test(item.title));
            setFilteredResults(results);
        } else {
            setFilteredResults([]); // Jodi input khali hoy tahole filtered results khali
        }
    };



    const handleLoginSuccess = () => {
        setIsModalOpen(false);  // Close the modal

        // Trigger SweetAlert
        Swal.fire({
            title: 'Login Successful!',
            text: 'Welcome to your dashboard.',
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 3000,  // Auto-close after 3 seconds
            timerProgressBar: true,
        });
    };

    const handleLoginError = () => {
        // Trigger SweetAlert
        Swal.fire({
            title: 'Number and Password not Match!',
            icon: 'error',
            confirmButtonText: 'Try again',
            timer: 3000,  // Auto-close after 3 seconds
            timerProgressBar: true,
        });
    }


    // Check if the current route is active
    const isActive = (route) => pathName === route;

    // Hide the navbar on admin routes
    if (pathName.includes('admin')) {
        return null;
    }

    return (
        <>
            <div className="mx-5 mt-7 px-[4%]">
                {/* Top Navbar Section */}
                <div className='flex justify-between items-center px-[4%]'>
                    {/* Search Input */}
                    <div
                     className="relative w-full max-w-[230px]">
                        <input
                            onChange={handleSearchChange}
                            type="text"
                            placeholder="Search for products..."
                            className="w-full pl-2 pr-8 py-2 bg-transparent border-0 border-b-2 
               border-transparent focus:outline-none focus:ring-0 
               focus:border-[#bbaeae] placeholder-gray-400"
                        />
                        <FiSearch className="text-lg absolute right-2 bottom-2.5 text-gray-400" />

                        {/* Dropdown matched results */}
                        {filteredResults.length > 0 && (

                            <SearchResult filteredResults={filteredResults}/>

                        )}


                    </div>


                    {/* Website Logo */}
                    <Image height={220} width={220} alt="logo" src={image} />

                    {/* Icons Section */}
                    <div className='flex gap-3 text-2xl text-[#736a6a] items-center'>
                        <FiPhone />
                        {/* <BsBookmarkHeart /> */}
                        <WishlistDrawer></WishlistDrawer>
                        <button>

                            {session?.status === 'authenticated' ?
                                <Link href="/user"
                                    className="text-xl bg-[#a3866e] w-9 h-9 rounded-full flex items-center justify-center">
                                    <LuUser2 className='text-white' />
                                </Link>
                                : <LuUser2 onClick={() => setIsModalOpen(true)} />
                            }

                        </button>
                    </div>

                </div>

                {/* Bottom Navbar Section */}
                <div className="border-t-2 mt-6 font-medium py-3 px-[4%]">
                    <div className="flex items-center justify-between">
                        {/* Links with Active Route Styling */}
                        <Link
                            href="/"
                            className={`text-[16px] hover:text-red-600 ${isActive('/') ? 'text-[#e07c0a] border-b-[3px] border-[#41398e]' : ''
                                }`}
                        >
                            HOME
                        </Link>

                        <Link
                            href="/category/panjabi"
                            className={`text-[16px] hover:text-red-600 ${isActive('/category/panjabi') ? 'text-[#e07c0a] border-b-[3px] border-[#41398e]' : ''
                                }`}
                        >
                            PANJABI
                        </Link>

                        <div className="dropdown group relative">
                            <Link
                                href="/category/tshirt"
                                className={`text-[16px] flex gap-2 items-center ${isActive('/category/tshirt') ? 'text-[#e07c0a] border-b-[3px] border-[#41398e]' : ''
                                    }`}
                            >
                                <span>T-SHIRT</span>
                                <IoIosArrowDown className="mt-1" />
                            </Link>
                            <div className="dropdown-content group-hover:block hidden space-y-2 py-5 px-4 shadow-2xl bg-white">
                                <Link href="/wholesaleAttar" className="border-b border-[#d4caca] pb-2">
                                    WHOLESALE ATTAR
                                </Link>
                                <Link href="/products" className="border-b border-[#d4caca] pb-2">
                                    COMBO & GIFTS
                                </Link>
                                <Link href="/products">ATTAR JERSEY COMBO</Link>
                            </div>
                        </div>

                        <Link
                            href="/category/polo-shirt"
                            className={`text-[16px] hover:text-red-600 ${isActive('/category/polo-shirt') ? 'text-[#e07c0a] border-b-[3px] border-[#41398e]' : ''
                                }`}
                        >
                            POLO SHIRT
                        </Link>

                        <Link
                            href="/category/boxer"
                            className={`text-[16px] hover:text-red-600 ${isActive('/category/boxer') ? 'inline-block border-b-[3px] border-[#41398e] text-[#e07c0a]' : ''
                                }`}
                        >
                            BOXER
                        </Link>

                        <div className="dropdown group relative">
                            <Link
                                href="/category/winter"
                                className={`text-[16px] flex gap-2 items-center ${isActive('/category/winter') ? 'text-[#e07c0a] border-b-[3px] border-[#41398e]' : ''
                                    }`}
                            >
                                <span>WINTER</span>
                                <IoIosArrowDown className="mt-1" />
                            </Link>
                            <div className="dropdown-content group-hover:block hidden space-y-2 py-5 px-4 shadow-2xl bg-white">
                                <Link href="/wholesaleAttar" className="border-b border-[#d4caca] pb-2">
                                    WHOLESALE ATTAR
                                </Link>
                                <Link href="/products" className="border-b border-[#d4caca] pb-2">
                                    COMBO & GIFTS
                                </Link>
                                <Link href="/products">ATTAR JERSEY COMBO</Link>
                            </div>
                        </div>

                        <Link
                            href="/category/shoe"
                            className={`text-[16px] hover:text-red-600 ${isActive('/category/shoe') ? 'text-[#e07c0a] border-b-[3px] border-[#41398e]' : ''
                                }`}
                        >
                            SHOE
                        </Link>

                        <Link
                            href="/category/summer-tracksuit-combo"
                            className={`text-[16px] hover:text-red-600 ${isActive('/category/summer-tracksuit-combo') ? 'text-[#e07c0a] border-b-[3px] border-[#41398e]' : ''
                                }`}
                        >
                            SUMMER TRACKSUIT COMBO
                        </Link>

                        <Link
                            href="/category/trouser"
                            className={`text-[16px] hover:text-red-600 ${isActive('/category/trouser') ? 'text-[#e07c0a] border-b-[3px] border-[#41398e]' : ''
                                }`}
                        >
                            TROUSER
                        </Link>

                        <div className="dropdown group relative">
                            <Link
                                href="/category/accessories"
                                className={`text-[16px] flex gap-2 items-center ${isActive('/category/accessories') ? 'text-[#e07c0a] border-b-[3px] border-[#41398e]' : ''
                                    }`}
                            >
                                <span>ACCESSORIES</span>
                                <IoIosArrowDown className="mt-1" />
                            </Link>
                            <div className="dropdown-content group-hover:block hidden space-y-2 py-5 px-4 shadow-2xl bg-white">
                                <Link href="/wholesaleAttar" className="border-b border-[#d4caca] pb-2">
                                    WHOLESALE ATTAR
                                </Link>
                                <Link href="/products" className="border-b border-[#d4caca] pb-2">
                                    COMBO & GIFTS
                                </Link>
                                <Link href="/products">ATTAR JERSEY COMBO</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div>
                    <LoginPageDesign
                        onLoginSuccess={handleLoginSuccess}
                        onLoginerror={handleLoginError}
                        closeModal={() => setIsModalOpen(false)}
                    ></LoginPageDesign>
                </div>
            </Modal>
        </>
    );
};

export default Navbar;
