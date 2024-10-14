import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-cyan-400 shadow-2xl rounded-xl mx-[4.5%] h-[180px] border my-10 flex justify-between items-center px-14'>
            <div className='space-y-2'>
                <h1 className='text-3xl font-semibold'>Join Our Newsletter To Get Offers</h1>
                <p className='text-lg'>Subscribe to our newsletter and stay updated</p>
            </div>

            <div className='flex items-center gap-5 mr-10'>
                <input type="text" placeholder="Enter your email" className="border border-[#b5abab] rounded-lg w-[380px] p-3" />
                <button className='bg-[#585858] text-white p-3 px-6 rounded-lg font-semibold'>Subscribe</button>
            </div>

        </div>
    );
};

export default Subscribe;