import React from 'react';
import SaleForm from './Form/SaleForm';
import Carousel from './Form/Carousel';

const Description = () => {

    return(
        
        <div className="relative">
         <div className="bottom-semi-circle inset-0 "></div>
            <div className='flex justify-between pl-44 py-14 align-center '>
                <div className=' text-left w-2/5 z-1'>
                   <p className='text-colur1 font-medium text-xl tracking-wide mb-7'>R E A L   E S T A T E</p>
                    <p className='text-6xl font-semibold mb-7'> Find a perfect home you love..!</p>
                    <p className='text-base font-thin text-textcolor3 mb-10'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.</p>
                    <Carousel />
                </div>
                <SaleForm />
            <div>
         </div>
        </div>
    </div>
    )
};

export default Description;
