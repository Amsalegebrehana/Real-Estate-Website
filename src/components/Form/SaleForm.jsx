import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';

const SalesForm = () => {

    const tabs = [
        { name: 'For Sale', href: '#', current: true },
        { name: 'For Rent', href: '#', current: false },

    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      };

    return (
        <div className="bg-white mx-7 md:px-7 lg:px-7 py-12 shadow-lg rounded-3xl h-full md:w-1/3 lg:w-1/3 ml-10 mt-14">

           {/* tab */}
            <div className=" ">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex" aria-label="Tabs">
                        {tabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                            tab.current
                                ? 'border-primary text-primary'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                'w-1/2 border-b-2 py-4  text-center text-lg font-medium'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            {tab.name}
                        </a>
                        ))}
                    </nav>
                </div>
            </div>
            
            {/* form */}
            <div className="p-6 mt-7">
                <div className=" space-y-9">

                    <input 
                        type="text" 
                        placeholder="Enter Location" 
                        className="border-none bg-graycolor rounded-3xl  p-5 w-full text-gray-400 text-lg font-thin" />

                    <select
                        id="propery-type"
                        name="Select Property Type"
                        className="border-none bg-graycolor text-gray-400 rounded-3xl p-5 w-full text-lg font-thin sm:leading-6"
                        defaultValue="Select Property Type"
                    >
                        <option>Select Property Type</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>   

                    <select
                        id="rooms"
                        name="Select Rooms"
                        className="border-none bg-graycolor text-gray-400 rounded-3xl p-5 w-full text-lg font-thin sm:leading-6"
                        defaultValue="Rooms"
                    >
                        <option>Select Rooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>

                <div className="flex space-x-2 text-primary mt-7">
                    <div style={{ transform: 'rotate(-90deg)' }}>
                        <TuneIcon />
                    </div>
                    <p className='text-base font-thin'>Advance Search</p>
                </div>

                <button className='flex rounded-full py-4  mt-14 w-full  bg-primary text-white justify-center align-center'>
                    <SearchIcon />
                    <p className='font-medium pl-2 text-lg'>Search </p>
                </button>
            </div>

        </div>
    )
}

export default SalesForm;