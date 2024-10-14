import React from 'react';

const VideoSection = () => {
    return (
        <div className='flex justify-between gap-5 px-[4.5%] my-16'>
            <div className='w-[100%]'>
                <h1 className='text-xl font-semibold mb-2'>Eid Collection 2024</h1>
                <iframe width="100%" height="415" src="https://www.youtube.com/embed/PAVtnbqksFI?si=V2eHuWgGHCSIxB69" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='w-[100%]'>
                <h1 className='text-xl font-semibold mb-2'>Premium Shirt</h1>
                <iframe width="100%" height="415" src="https://www.youtube.com/embed/Jm8__NOUieA?si=XdrRzr5hVtrNy7ct" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </div>
    );
};

export default VideoSection;