import React from 'react';

import GoogleIcon from './Icons/GoogleIcon';

import amazon from '../assets/amazon.svg';
import netflix from '../assets/netflix.svg';
import spotify from '../assets/spotify.svg';
import samsung from '../assets/samsung.svg';
import logitech from '../assets/logitech.svg';

const CompanySection = () => {
    return (
        <div >
            <p className='justify-center text-center py-14 text-textcolor3 text-base'>Trusted by 100+ Companies across the globe! </p>
            <div className='ciircle-2'></div>
            <div className="flex space-x-3 px-5" >
                <div className="w-44 h-36 filter grayscale">
                    <GoogleIcon />
                </div>
                
                <div className="w-44 h-32 filter grayscale">
                    <img src={amazon}  alt="amazon" />
                </div>
                {/* Item 3 */}
                <div className="w-44 h-32 filter grayscale">
                    <img src={logitech}  alt="logitech" />
                </div>
                {/* Item 4 */}
                <div className="w-44 h-40 filter grayscale">
                    <img src={spotify}  alt="spotify" />
                </div>
                {/* Item 5 */}
                <div className="w-44 h-36 filter grayscale">
                    <img src={samsung}  alt="samsung" />
                </div>
                <div className="w-44 h-36 filter grayscale">
                    <img src={netflix}  alt="netflix" />
                </div>
            </div>
     </div>
    );
};
export default CompanySection;