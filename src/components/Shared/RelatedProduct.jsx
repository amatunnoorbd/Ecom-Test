import React from 'react';
import CommonHeading from './CommonHeading';
import ExtraSliding from '../Home/ExtraSliding';

const RelatedProduct = () => {
    return (
        <div className='mt-5'>
            <CommonHeading
                title="YOU MAY ALSO LIKE"
                view="no"
            />
            <ExtraSliding />
        </div>
    );
};

export default RelatedProduct;