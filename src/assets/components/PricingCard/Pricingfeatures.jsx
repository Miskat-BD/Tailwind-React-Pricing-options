import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Pricingfeatures = ({feature}) => {
    console.log(feature);
    return (
        <div className=''>
            
            <p className='flex gap-2.5 mt-4'><CircleCheckBig></CircleCheckBig> {feature}</p>
        </div>
    );
};

export default Pricingfeatures;