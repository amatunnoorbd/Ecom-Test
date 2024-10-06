import { IoIosArrowDown } from "react-icons/io";
import { IoHome } from "react-icons/io5";


const Navas = () => {
    return (
        <div className="flex items-center pl-28 border-t border-b border-[#e8d3d3]">
            <a to='/' className="p-3 text-2xl border-r border-[#e8d3d3] hover:text-red-600">
                <IoHome />
            </a>

            {/* 1 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>ATTAR</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <a to="/wholesaleAttar" className="border-b border-[#d4caca] pb-2"  >WHOLESALE ATTAR</a>
                    <a to="/products" className="border-b border-[#d4caca] pb-2"  >COMBO & GIFTS</a>
                    <a to="/products"  >ATTAR JERSEY COMBO</a>
                </div>
            </div>

            {/* 2 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>CLOTHING</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <a to="/panjabi" className="border-b border-[#d4caca] pb-2"  >PANJABI</a>
                    <a to="/dawahJersey" >DAWAH JERSEY</a>
                </div>
            </div>

            {/* 3 */}
            <div className="dropdown">
                <a to="/products">
                    <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>DAWAH CANVAS</span></button>
                </a>
            </div>

            {/* 4 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>OTHERS</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <a to="/rechargeFan">RECHARGEABLE FAN</a>
                </div>
            </div>

            {/* 5 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>COMBO OFFERS</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <a to="/products" className="border-b border-[#d4caca] pb-2"  >DAWAH CAP COMBO</a>
                    <a to='/attarAndShirt' >10 PCS POPULAR ATTAR + T-SHIRT COMBO</a>
                </div>
            </div>

            {/* 6 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>FOOD</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <a to="/products" className="border-b border-[#d4caca] pb-2"  >MEDJOOL DATES</a>
                    <a to="/litchiHoney">LITCHI FLOWER HONEY</a>
                </div>
            </div>

            {/* 7 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>WOMEN'S CLOTHING</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4 shadow-2xl">
                    <a to="/products" className="border-b border-[#d4caca] pb-2"  >ESSENTIAL LONG KHIMAR</a>
                    <a to="/products" className="border-b border-[#d4caca] pb-2">SALAT KHIMAR</a>
                    <a to="/products">BORKA</a>
                </div>
            </div>


        </div>
    );
};

export default Navas;