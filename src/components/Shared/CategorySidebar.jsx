import React from 'react';
// components/ColorFilter.js
const colors = [
    { name: "White", color: "bg-white border" },
    { name: "Maroon", color: "bg-red-800" },
    { name: "Black", color: "bg-black" },
    { name: "Men-Pink", color: "bg-pink-500" },
    { name: "Multicolor", color: "bg-gradient-to-r from-red-400 to-blue-500" },
    { name: "Coffee", color: "bg-yellow-900" },
    { name: "Navy Blue", color: "bg-blue-900" },
    { name: "Teal", color: "bg-teal-500" },
    { name: "Blue", color: "bg-blue-500" },
    { name: "Olive", color: "bg-lime-700" },
    { name: "Bottle Green", color: "bg-green-900" },
    { name: "Red", color: "bg-red-500" },
    { name: "Biscuit", color: "bg-amber-200" },
    { name: "Golden", color: "bg-yellow-500" },
    { name: "Bricks", color: "bg-red-600" },
    { name: "Purple", color: "bg-purple-500" },
    { name: "Silver", color: "bg-gray-300" },
];

const ranges = [
    { id: 1, label: "100 to 300" },
    { id: 2, label: "301 to 500" },
    { id: 3, label: "501 to 1000" },
    { id: 4, label: "1001 to 2500" },
    { id: 5, label: "2501 to 5000" },
    { id: 6, label: "5001 to 10000" },
];

const size = [
    { id: 1, label: "M" },
    { id: 2, label: "L" },
    { id: 3, label: "Xl" },
    { id: 4, label: "XXL" },

];

const apparels = [
    { id: 1, label: "Elite Panjabi" },
    { id: 2, label: "Solid T-Shirt" },
    { id: 3, label: "Premium T-Shirt" },
    { id: 4, label: "Plain T-Shirt" },
    { id: 5, label: "Denim T-Shirt" },
    { id: 6, label: "Polo T-Shirt" },
    { id: 7, label: "Hoodie" },
    { id: 8, label: "Jacket" },
  ];


const CategorySidebar = () => {
    return (
        <div className='border rounded-lg max-w-64 shadow-xl px-3 pt-1 bg-[#f1efef] mb-10'>

            {/* <h1 className='text-lg font-semibold mb-6'>Home / SHOP</h1> */}
            <div className='flex items-center text-xl font-semibold mb-4'>
                <h1 className='border-b-[3px] border-[#c64343]'>FILTER B</h1>
                <p>Y</p>
            </div>


            {/* color */}
            <div>
                <div className='border-b-2 mb-3'>
                    <h1 className='text-lg font-semibold border-b-[3px] border-[#c64343] inline-block'>COLOR</h1>
                </div>

                <div className="h-72 overflow-y-auto p-3 rounded-md mb-8">
                    <ul className="space-y-1">
                        {colors.map((item, index) => (
                            <li key={index} className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                                />
                                <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                                <span className="text-base text-gray-700">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            {/* PRICE */}
            <div>
                <div className='border-b-2'>
                    <h1 className='text-lg font-semibold border-b-[3px] border-[#c64343] inline-block'>PRICE</h1>
                </div>

                <div className="overflow-y-auto p-3 mb-8 rounded-md ">
                    <ul className="space-y-1">
                        {ranges.map((item) => (
                            <li key={item.id} className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                                />
                                <span className="text-base text-gray-700">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



            {/* SIZE */}
            <div>
                <div className='border-b-2'>
                    <h1 className='text-lg font-semibold border-b-[3px] border-[#c64343] inline-block'>SIZE</h1>
                </div>

                <div className="overflow-y-auto p-3 mb-8 rounded-md ">
                    <ul className="space-y-1">
                        {size.map((item) => (
                            <li key={item.id} className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                                />
                                <span className="text-base text-gray-700">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



            {/* CATEGORY */}
            <div>
                <div className='border-b-2'>
                    <h1 className='text-lg font-semibold border-b-[3px] border-[#c64343] inline-block'>CATEGORY</h1>
                </div>

                <div className="overflow-y-auto p-3 mb-8 rounded-md ">
                    <ul className="space-y-1">
                        {apparels.map((item) => (
                            <li key={item.id} className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                                />
                                <span className="text-base text-gray-700">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>




        </div>
    );
};

export default CategorySidebar;