
import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const BottomFooter = () => {

    return (
        <div className="flex bg-black justify-between px-14 py-2 text-white bottom-0">
           
            <div className='flex '>
                
                <p className='text-sm pl-2 text-textcolor4'>&copy; Rezilla – All rights reserved</p> 
            </div>
            <div className='hidden sm:flex flex-row space-x-5'>
                <a  href='#' className='text-sm text-textcolor4'>Terms and Conditions</a>
                <a  href='#' className='text-sm text-textcolor4'>Privacy Policy</a>
                <a href='#' className='text-sm text-textcolor4'>Disclaimer</a>
            </div>
        
        </div>
        )
};

export default BottomFooter;