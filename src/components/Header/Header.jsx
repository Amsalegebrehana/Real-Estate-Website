import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const  Header = () => {
    return (
        <div className='flex p-5 justify-between px-14'>
            <div className='flex space-x-6'>
                <p>Home</p>
                <p>About</p>
                <p>Listings</p>
                <p>Services</p>
                <p>Blogs</p>
            </div>
            <div className='flex'>
                <div className='rounded-full bg-primary p-3 text-white'>
                    <HomeOutlinedIcon fontSize='medium' color='#ff9800'/>
                </div>
                <p className=' font-semibold p-2 text-center text-xl'>Rezilla</p>
            </div>
            <div className='flex'>
                
                <button className='flex p-3 '>
                    <AccountCircleOutlinedIcon fontSize='small' />
                    <p className='px-2 text-base'>Login/Signup</p>
                </button>
                <button className='flex rounded-full bg-primary p-3 text-white justify-center'>
                    <HomeOutlinedIcon fontSize='small' />
                    <p className='text-base px-2'>Add Listing</p>
                </button>
                
            </div>
        </div>
    )
};

export default Header;