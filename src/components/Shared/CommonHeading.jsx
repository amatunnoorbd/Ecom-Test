import React from 'react';

const CommonHeading = ({ title, view }) => {
    return (
        <div className='mb-5 text-center border-b-2 border-[#dfd5d5] relative'>
            <h1 className='border-b-[3px] inline-block border-[#806363] text-2xl font-semibold pb-2'>{title}</h1>
            {
                view === "yes" &&
                <p className='absolute right-0 bottom-0 font-semibold'>View All</p>
            }
        </div>
    );
};

export default CommonHeading;