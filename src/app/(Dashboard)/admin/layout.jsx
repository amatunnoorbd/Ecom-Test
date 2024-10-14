import SlideNav from '@/components/Dashboard/Shared/SlideNav';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex flex-col lg:flex-row'>
            <div>
                <SlideNav></SlideNav>
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;