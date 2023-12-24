import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const  Header = () => {
    return (
        <div className='navbar sticky mb-10 w-full z-50 bg-white top-0'>

            <div className='flex p-5 justify-between px-14 '>
                <div className='flex space-x-2'>
                    <a href='#' className='hover:bg-secondary bg-opacity-50 px-4 py-3  rounded-full'>Home</a>
                    <a href='#' className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>About</a>
                    <a href='#' className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>Listings</a>
                    <a href='#' className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>Services</a>
                    <a href='#' className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>Blogs</a>
                </div>
                <div className='flex'>
                    <div className='rounded-full bg-primary p-3 text-white'>
                        <HomeOutlinedIcon fontSize='medium' color='#ff9800'/>
                    </div>
                    <p className=' font-semibold p-2 text-center text-xl'>Rezilla</p>
                </div>
                <div className='flex'>
                    
                    <button className='flex p-3 justify-center'>
                        <AccountCircleOutlinedIcon fontSize='small' />
                        <p className='px-2 text-base'>Login/Signup</p>
                    </button>
                    <button className='flex rounded-full bg-primary py-3 px-4 text-white justify-center'>
                        <HomeOutlinedIcon fontSize='small' />
                        <p className='text-base px-2'>Add Listing</p>
                    </button>
                    
                </div>
            </div>
        </div>
    )
};

export default Header;