import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SearchResult = ({ filteredResults }) => {
    return (
        <div
            className="absolute top-full left-0 right-0 bg-white border 
                border-gray-300 rounded shadow-md z-50 max-h-60 overflow-y-auto mt-2 w-[440px] pl-1 pt-2 pb-3"
        >
            {filteredResults.map((item) => (
                <Link
                    href={`/product/${item._id}`}
                    key={item._id}
                    className="px-2 py-1 hover:bg-gray-100 cursor-pointer text-gray-700 flex gap-3"
                >
                    <Image
                        width={60}
                        height={25}
                        alt='product_img'
                        src={item.main_image}
                    />

                    <div>
                        <h1 className='font-semibold'>{item.title}</h1>
                        <p className='font-semibold'>TK. {item.discount_price}</p>
                    </div>


                </Link>
            ))}
        </div>
    );
};

export default SearchResult;