import Image from 'next/image';
import wallet from '../Image/Gallery/wallet_img.jpeg';
import belt from '../Image/Gallery/belt_img.jpeg';
import mask from '../Image/Gallery/mask_img.jpeg';

const Gallery = () => {
    return (
        <div className="items-center px-[4.5%] my-10 flex flex-col md:flex-row gap-4">
            {/* Left Section */}
            <div className="md:w-2/3">
                <Image 
                    src={wallet} 
                    alt="wallet" 
                    className="w-full h-auto rounded-lg object-cover" 
                />
            </div>

            {/* Right Section */}
            <div className="md:w-1/3 flex flex-col gap-2">
                <Image 
                    src={belt} 
                    alt="belt" 
                    className="w-full h-auto rounded-lg object-cover" 
                />
                <Image 
                    src={mask} 
                    alt="mask" 
                    className="w-full h-auto rounded-lg object-cover" 
                />
            </div>
        </div>
    );
};

export default Gallery;
