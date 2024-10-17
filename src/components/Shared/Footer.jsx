"use client"
import { SiFacebook } from "react-icons/si";
import { GrYoutube } from "react-icons/gr";
import { usePathname } from "next/navigation";


const Footer = () => {
    const pathName = usePathname();
    // Hide the footer on checkout page
    if (pathName.includes('checkout')) {
        return <></>;
    }

    return (
        <footer className="text-white px-40 bg-black ">
            <div className="footer py-14 flex">
                <nav className="flex flex-col mr-36 space-y-1">
                    <h6 className="footer-title mb-3">CONTACT US</h6>
                    <a className="link link-hover">Call us <span className="font-bold">09638090000</span></a>
                    <a className="link link-hover">Email us <span className="font-bold">cc.believerssign@gmail.com</span></a>
                    <a className="link link-hover">Shop Address <span className="font-bold">Shop-3/1, 2nd Floor (৩য় তলা),</span></a>
                    <a className="link link-hover font-bold">Eastern Plaza, Hatirpool, Dhaka</a>
                </nav>
                <nav className="flex flex-col mr-32 space-y-1">
                    <h6 className="footer-title mb-3">Customers Account</h6>
                    <a className="link link-hover">Sign In</a>
                    <a className="link link-hover">Create New Account</a>
                    <a className="link link-hover">My Orders</a>
                </nav>
                <nav className="flex flex-col mr-32 space-y-1">
                    <h6 className="footer-title mb-3">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Condition</a>
                    <a className="link link-hover">About Us</a>
                </nav>
                <nav className="flex flex-col mr-32 space-y-1">
                    <h6 className="footer-title mb-3">Follow Us</h6>
                    <div className="flex gap-2 justify-center text-lg text-white">
                        <div className="bg-[#0F80C7] p-2 rounded-full"><SiFacebook/></div>
                        <div className="bg-[#CC0000] p-2 rounded-full"><GrYoutube/></div>
                    </div>

                </nav>
            </div>

            <div className="text-center border-t-2 py-4 text-sm border-[#534848]">
                <h1>Copyright © 2023 www.believerssign.com & www.believerssign.store - All Rights Reserved. | Powered by <span className="text-green-500 font-bold">StoreX</span></h1>
            </div>
        </footer>
    );
};

export default Footer;