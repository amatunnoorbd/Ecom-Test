import DetailsPage from '@/components/Shared/DetailsPage';
import { getProductDetails } from '@/services/getProdect';
import React from 'react';

const page =async ({params}) => {
    console.log(params);
    const productDetails = await getProductDetails(params._id);
    console.log(productDetails.products);


    return (
        <div>
            <DetailsPage product={productDetails.products}/>
        </div>
    );
};

export default page;