"use client"
import React, { useEffect, useState } from 'react';
import CardSlider from './CardSlider';
import { getProductByCategories } from '@/services/getProdect';

const CategoryPage = ({ categories }) => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getProductByCategories(`${categories}`);
            setProducts(fetchedProducts?.products || []);
        };
        fetchProducts();
    }, []);


    return (
        <div>
            <div className="justify-end pt-5 py-4 w-full mx-auto flex items-center gap-3">
                <label className="text-sm font-medium">
                    Sort By
                </label>
                <select
                    id="sort-by"
                    className="border border-[#afa3a3] text-sm p-1"
                >
                    <option value="default">Default</option>
                    <option value="latest">Latest</option>
                    <option value="low-to-high">Price Low to High</option>
                    <option value="high-to-low">Price High to Low</option>
                </select>
            </div>



            <div className='grid grid-cols-3 gap-8'>
                {
                    products.length > 0 ? (
                        products?.map((product, idx) =>
                            <CardSlider
                                key={idx}
                                product={product}
                                height={490}
                                imageHeightPercent={70}
                            />)
                    ) : (
                        [...Array(6)].map((_, idx) => (
                            <CardSlider
                                key={idx}
                                isLoading
                                height={490}
                                imageHeightPercent={70}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default CategoryPage;