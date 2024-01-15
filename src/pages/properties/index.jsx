import BedIcon from '../../assets/bedIcon.svg';
import BathIcon from '../../assets/bathroomicon.svg';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PathConstants from '../../routes/PathConstants';
import files from '../../data/propertyLists.json';


const Listings = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        if (e === 'all') {
            setFilter('');
        }
        else {
            setFilter(e);
        }
    }

    const filteredFiles = files.filter(
        (file) => {
            if (filter === '') {
                return file;
            }
            else{
                return file.type === filter;
            }
            
        }
    );
    

    return (
        <div className="container">
            <div className="bg-white py-10 sm:py-14">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between md:pl-14 pt-14 pb-2 align-center">
                        
                        <div className=' text-left px-5 sm:px-10 md:px-0 lg:px-0 md:w-2/5 lg:w-2/5 z-1'>

                            <p className='text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-7'> All Properties</p>
                            <p className='text-base font-thin text-textcolor3 mb-10'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                            
                        </div>

                        <div className="space-x-3 mt-5">
                        <button className={" text-primary font-medium py-2 px-6 border border-primary " + (filter===''? 'bg-primary rounded-full text-white':'rounded-full hover:text-white bg-transparent  hover:bg-primary hover:border-transparent')} onClick={() => handleFilterChange('all')}>
                               All
                            </button>

                            <button className={" text-primary font-medium py-2 px-6 border border-primary " + (filter==='sell'? 'bg-primary rounded-full text-white':'rounded-full hover:text-white bg-transparent  hover:bg-primary hover:border-transparent')} onClick={() => handleFilterChange('sell')}>
                                Sell
                            </button>

                            <button className={" text-primary font-medium py-2 px-6 border border-primary " + (filter==='rent'? 'bg-primary rounded-full text-white':'rounded-full hover:text-white bg-transparent  hover:bg-primary hover:border-transparent')} onClick={() => handleFilterChange('rent')}>
                               Rent
                            </button>
                        </div>
                        </div>
                    </div>

                    <div>
                        <ul role="list" className="grid grid-cols-2 mx-3 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {filteredFiles.map((property) => (
                            <Link  to={`/properties/${property.id}`}>
                                <li key={property.source} className="rounded-2xl relative mt-14 ">
                                    <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                        <img src={property.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75 h-72 w-full" />
                                        <button type="button" className="absolute inset-0 focus:outline-none">
                                        <span className="sr-only">View details for {property.title}</span>
                                        </button>
                                    </div>
                                    <div className='text-left mt-5 space-y-2'>
                                        <div className='flex justify-between'>
                                            <p className='text-base sm:text-base md:text-xl lg:text-2xl font-medium'>$ {property.price}</p>
                                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10 capitalize">{property.type}</span>

                                        </div>
                                    <p className='text-xs  md:text-base lg:text-base font-medium'>{property.title}</p>
                                    <p className='text-sm md:text-sm lg:text-sm font-thin text-textcolor3'>{property.address}</p>
                                    <div className="flex space-x-3 font-thin text-textcolor3" >
                                        {/* <BedIcon />  */} 
                                        <img src={BedIcon} alt="BedIcon" />
                                        <p className='text-textcolor2 text-xs sm:text-sm md:text-base lg:text-base'>{property.numberOfBedRooms} Beds</p>
                                        {/* <BathIcon /> */}
                                        <img src={BathIcon} alt="BathIcon" className='filter grayscale' />
                                        <p  className='text-textcolor2 text-xs sm:text-sm md:text-base lg:text-base'>   {property.numberOfBathRooms} Bath</p>
                                    </div>
                                    </div>
                                </li>
                            </Link>
                        ))}
                        </ul>
                    </div>

            </div>
        </div>
    );
};

export default Listings;