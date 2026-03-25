import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyCard from '../DaisyCard/DaisyCard';
const PricingOptions = ({pricingOptionsPromise}) => {
    const pricingOptions = use(pricingOptionsPromise)
    // console.log(pricingOptions);
    return (
        <div>
            <h1 className='text-5xl text-center my-6'>Get Out Membership</h1>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* {
                    pricingOptions.map(pricing => <PricingCard key={pricing.id} pricing ={pricing}></PricingCard>)
                } */}

                {
                    pricingOptions.map(pricing => <DaisyCard key={pricing.id}
                    pricing={pricing}
                    ></DaisyCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;