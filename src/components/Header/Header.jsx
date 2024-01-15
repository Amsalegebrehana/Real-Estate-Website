import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Logo from '../../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PathConstants from '../../routes/PathConstants';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleopenCollapse = () => {
        setIsOpen(true);
    };
    const handleCloseCollapse = () => {
        setIsOpen(false);
    }

    return (


        <div className=' navbar sticky mb-10 w-full z-50 bg-white top-0 '>
            <div className='container'>

            <div className='flex p-5 justify-between  '>
                <div className='hidden md:flex flex-col sm:flex-col md:flex-row lg:flex-row space-x-2'>
                    <p className='hover:bg-secondary bg-opacity-50 px-4 py-3  rounded-full'>
                        <Link to={PathConstants.HOME}>
                            Home
                        </Link>
                    </p>
                    <p className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>
                        <Link to={PathConstants.ABOUT}>
                            About
                        </Link>
                    </p>
                    <p  className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>
                        <Link to={PathConstants.LISTING}>
                            Listings
                        </Link>
                    </p>
                    <a href='#' className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>Services</a>
                    
                    <p  className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>
                        <Link to={PathConstants.BLOG}>
                            Blogs
                        </Link>
                       
                    </p>
                </div>
                <div className='flex'>
                    <div className='rounded-full w-10 h-10 bg-primary p-3 text-white'>

                        <img src={Logo} alt='logo' />
                    </div>
                    <p className=' font-semibold p-2 text-center text-xl'>Rezilla</p>
                </div>
                <div className='hidden md:flex flex-col sm:flex-col md:flex-row lg:flex-row '>

                    <button className='flex p-3 justify-center'>
                        <AccountCircleOutlinedIcon fontSize='small' />
                        <p className='px-2 text-base'>
                            <Link to={PathConstants.LOGIN}>
                                Login/Signup
                            </Link>
                        </p>
                    </button>
                    <button className='flex rounded-full bg-primary py-3 px-4 text-white justify-center'>
                        <img src={Logo} alt='logo' />
                        <p className='text-base px-2'>Add Listing</p>
                    </button>

                </div>
                {/* mobile view */}
                {isOpen ? (
                    <button className=' md:hidden lg:hidden' onClick={handleCloseCollapse}>
                        <CloseIcon />
                    </button>
                ) : 
                (<button className=' md:hidden lg:hidden' onClick={handleopenCollapse}>
                    <MenuIcon />
                </button>)
                }

            </div>
            {isOpen ? (
                <div className="lg:hidden md:hidden flex sm:flex flex-col px-10">
                    <a href='#' className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>Home</a>
                    <a href='#' className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>About</a>
                    <a href='#' className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>Listings</a>
                    <a href='#' className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>Services</a>
                    <a href='#' className='hover:bg-secondary bg-opacity-50 px-4 py-3 rounded-full'>Blogs</a>
                    <button className='flex p-3 justify-center'>
                        <AccountCircleOutlinedIcon fontSize='small' />
                        <p className='px-2 text-base'>Login/Signup</p>
                    </button>
                    <button className='flex rounded-full bg-primary py-3 px-10 text-white justify-center'>
                        <img src={Logo} alt='logo' />
                        <p className='text-base px-2'>Add Listing</p>
                    </button>
            </div>
            ): ''}
            </div>
            
        </div>


    )
};

export default Header;