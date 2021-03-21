import React from 'react';
import Checkout from '../Checkout/Checkout';
import { LocationData } from '../LocationData';

const Slot = () => {
   const location =  LocationData;
   console.log(location);
    return (
        <div>
            {
                location.map(location =>
                    <Checkout
                        location={location}
                    
                    />)
            }
        </div>
    );
};

export default Slot;