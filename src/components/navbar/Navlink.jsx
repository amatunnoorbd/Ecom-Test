import { IoIosArrowDown } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import Link from 'next/link';

const Navlink = () => {
    return (
        <div className="flex items-center pl-28 border-t border-b border-[#e8d3d3]">
            <Link href='/' className="p-3 text-2xl border-r border-[#e8d3d3] hover:text-red-600">
                <IoHome />
            </Link>

            {/* 1 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>ATTAR</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <Link href="/wholesaleAttar" className="border-b border-[#d4caca] pb-2">WHOLESALE ATTAR</Link>
                    <Link href="/products" className="border-b border-[#d4caca] pb-2">COMBO & GIFTS</Link>
                    <Link href="/products">ATTAR JERSEY COMBO</Link>
                </div>
            </div>

            {/* 2 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>CLOTHING</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <Link href="/panjabi" className="border-b border-[#d4caca] pb-2">PANJABI</Link>
                    <Link href="/dawahJersey">DAWAH JERSEY</Link>
                </div>
            </div>

            {/* 3 */}
            <div className="dropdown">
                <Link href="/products">
                    <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>DAWAH CANVAS</span></button>
                </Link>
            </div>

            {/* 4 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>OTHERS</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <Link href="/rechargeFan">RECHARGEABLE FAN</Link>
                </div>
            </div>

            {/* 5 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>COMBO OFFERS</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <Link href="/products" className="border-b border-[#d4caca] pb-2">DAWAH CAP COMBO</Link>
                    <Link href='/attarAndShirt'>10 PCS POPULAR ATTAR + T-SHIRT COMBO</Link>
                </div>
            </div>

            {/* 6 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>FOOD</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <Link href="/products" className="border-b border-[#d4caca] pb-2">MEDJOOL DATES</Link>
                    <Link href="/litchiHoney">LITCHI FLOWER HONEY</Link>
                </div>
            </div>

            {/* 7 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>WOMEN&apos;S CLOTHING</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <Link href="/products" className="border-b border-[#d4caca] pb-2">ESSENTIAL LONG KHIMAR</Link>
                    <Link href="/products" className="border-b border-[#d4caca] pb-2">SALAT KHIMAR</Link>
                    <Link href="/products">BORKA</Link>
                </div>
            </div>
        </div>
    );
};

export default Navlink;
