import SlideNav from '@/components/Dashboard/Shared/SlideNav';
import CategorySidebar from '@/components/Shared/CategorySidebar';
import React from 'react';

const categoryLayout = ({ children }) => {
    return (
        <div className='mx-[4.5%] flex lg:flex-row gap-5'>
            <div>
                <h1 className='font-semibold pt-3 pb-8'>Home / SHOP</h1>
                <CategorySidebar />
            </div>
            <div className='flex-grow mb-16'>
                {children}
            </div>
        </div>
    );
};

export default categoryLayout;