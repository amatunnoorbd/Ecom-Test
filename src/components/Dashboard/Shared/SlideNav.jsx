"use client"
import { FaEnvelope, FaList, FaUsers, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { IoBookmarksSharp, IoPersonAdd } from "react-icons/io5";
import { MdBookmarkAdd } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

const SlideNav = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLinkClick = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="flex h-full relative">

            <div className={`fixed z-30 md:relative md:z-auto min-w-40 min-h-screen bg-orange-400 px-5 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <div className="relative">
                    <div className="absolute right-0 top-2 md:hidden">
                        <FaTimes className="text-white text-2xl cursor-pointer" onClick={() => setSidebarOpen(false)} />
                    </div>
                </div>

                <div className="text-center mt-5">
                    

                    <div className="items-center">
                        <h1 className="text-2xl font-bold">Ashikur Rahaman</h1>
                        <p className="text-lg">ashik.iuict@gmail.com</p>
                    </div>
                </div>

                <div className="divider"></div>

                <ul className="menu text-[17px]">
                
                        <>
                            <li>
                                <a to='/dashboard/teacherRequest' isActive={() => ['/dashboard/teacherRequest', '/dashboard/users', '/dashboard/allClasses', '/dashboard/profile'].includes(location.pathname)} onClick={handleLinkClick}>
                                    <IoPersonAdd />
                                    Teacher Request
                                </a>
                            </li>
                            <li>
                                <a to='/dashboard/users' isActive={() => location.pathname === '/dashboard/users'} onClick={handleLinkClick}>
                                    <FaUsers />
                                    Users
                                </a>
                            </li>
                            <li>
                                <a to='/dashboard/allClasses' isActive={() => location.pathname === '/dashboard/allClasses'} onClick={handleLinkClick}>
                                    <IoBookmarksSharp />
                                    All Classes
                                </a>
                            </li>
                            <li>
                                <a to='/dashboard/profile' isActive={() => location.pathname === '/dashboard/profile'} onClick={handleLinkClick}>
                                    <FaList />
                                    Profile
                                </a>
                            </li>
                        </>
                    

                    

                    <div className="divider"></div>
                    <li>
                        <Link href="/">
                            <FaHome />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <FaEnvelope />
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex-1">
                <div className="md:hidden flex justify-between items-center p-4 bg-orange-400">
                    <FaBars className="text-white text-2xl cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)} />
                    <h1 className="text-white text-2xl font-bold">Dashboard</h1>
                </div>
                
            </div>

            {sidebarOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-20 md:hidden" onClick={() => setSidebarOpen(false)}></div>
            )}
        </div>
    );
};


export default SlideNav;