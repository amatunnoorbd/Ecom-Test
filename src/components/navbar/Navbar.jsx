"use client"
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import NavLinks from "./Navlink";


const Navbar = () => {
    return (
        <div className="w-full bg-white">
            <div className="mt-6 flex items-center justify-between gap-6 mx-auto px-8 lg:px-0 lg:max-w-7xl mb-6">
                {/* <img className="w-48" src="https://i.ibb.co/yg799PN/Screenshot-2024-05-16-011528.png" alt="" /> */}

                <Image
                    src="https://i.ibb.co/yg799PN/Screenshot-2024-05-16-011528.png"
                    alt="Website logo"
                    width={192} // Width in pixels
                    height={60} // Height in pixels
                ></Image>

                <form className="flex-grow flex">
                    <input className="p-3 rounded-l-lg border border-red-600 w-full" type="text" name="search_value" id="" placeholder="Search Product" />
                    <button className="bg-red-600 px-4 rounded-r-lg text-white text-2xl"><IoSearch /></button>
                </form>

                <div className="flex items-center gap-3 border-[#e8d3d3] text-lg border p-2 rounded-lg">
                    <FiPhone className="text-xl" />
                    <span>09638090000</span>
                </div>

                {/* login/register */}

                <div className="space-x-1 flex px-2">
                    <FaRegUser className="text-xl mr-2" />
                    <span>Login</span>
                    <span>/</span>
                    <span>Sign In</span>
                </div>


                <button className="relative">
                    <PiShoppingCart className="text-3xl " />
                    <div className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center">
                        <p>0</p>
                    </div>
                </button>
            </div>

            <div>
                <NavLinks></NavLinks>
            </div>

        </div>
    );
};

export default Navbar;
