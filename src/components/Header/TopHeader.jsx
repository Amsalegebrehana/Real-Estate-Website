import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const TopHeader = () => {
    return(
        <div className="flex bg-primary justify-between px-14 py-2 text-white">
           
        <div className='flex '>
            <LocationOnOutlinedIcon fontSize="small"/>
            <p className='text-sm pl-2'>Rezilla, 18 Grattan St, Brooklyn</p> 
        </div>
        <div className='flex flex-row '>
            <p className='text-sm'>
                <PhoneEnabledOutlinedIcon fontSize="small"/> 
                <span  className='pl-2'>+1 206-214-2298</span>
            </p>
            <p className='ml-4 text-sm px-4'> 
                <EmailOutlinedIcon fontSize="small" /> 
                <span className='pl-2'>support@rezilla.com</span>
            
            </p>
        </div>
        
    </div>
    )
};

export default TopHeader;