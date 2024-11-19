import CommonHeading from '../Shared/CommonHeading';
import category_1 from '../Image/category_1.jpeg';
import category_2 from '../Image/category_2.jpeg';
import category_3 from '../Image/category_3.jpeg';
import category_4 from '../Image/category_4.jpeg';
import Image from 'next/image';
import Link from 'next/link';

const items = [
    {
        image: category_1,
        title: "tshirt"
    },
    {
        image: category_2,
        title: "panjabi"
    },
    {
        image: category_3,
        title: "shirt"
    },
    {
        image: category_4,
        title: "tshirt"
    }
]

const BrowseCategory = () => {
    return (
        <div className='mx-[4.5%] mb-10'>
            <CommonHeading
                title="BROWSE OUR CATEGORIES"
                view="no"
            ></CommonHeading>

            <div className='flex justify-between gap-5'>
                {
                    items?.map((item, index) =>
                        <div key={index} className='relative'>
                            <Image
                                src={item.image}
                                width={800}
                                alt={item.title}
                                className='rounded-xl'
                            ></Image>
                            <Link href={`/category/${item.title}`} className='absolute bottom-2 left-[34%] bg-white font-semibold px-6 py-1 rounded-md hover:bg-green-700 hover:text-white'>{item.title}</Link>
                        </div>
                    )
                }
                
            </div>

        </div >
    );
};

export default BrowseCategory;