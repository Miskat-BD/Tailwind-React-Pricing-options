import React from 'react';
import Pricingfeatures from './Pricingfeatures';

const PricingCard = ({pricing}) => {
    // console.log(pricing);
    const {name, price, description, features} = pricing
    return (
        <div className='border bg-amber-600 rounded-3xl p-4 my-1 flex flex-col'>
            {/* Card Header */}
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h1 className="text-3xl">${price}/Monthly</h1>
            </div>
            {/* Card body */}
            <div className="bg-amber-500 p-4 rounded-3xl flex-1">
                <p>{description}</p>
                <h2 className='text-xl'>Features:</h2>
                {
                    features.map((feature, i) => <Pricingfeatures key={i} feature={feature}></Pricingfeatures>)
                }

            </div>
           <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;