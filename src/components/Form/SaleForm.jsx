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
        <div className="bg-white  py-12 shadow-md sm:rounded-xl w-96 ml-10">

           {/* tab */}
            <div className="hidden sm:block">
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
                                'w-1/2 border-b-2 py-4  text-center text-base font-medium'
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
            <div className="p-6 space-y-6">

                <input 
                    type="text" 
                    placeholder="Enter Location" 
                    className=" bg-graycolor rounded-xl p-4 w-full text-gray-400 text-base font-thin" />

                <select
                    id="propery-type"
                    name="Select Property Type"
                    className="bg-graycolor text-gray-400 rounded-md p-4 w-full text-base font-thin sm:leading-6"
                    defaultValue="Select Property Type"
                >
                    <option>Select Property Type</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select>   

                <select
                    id="rooms"
                    name="Select Rooms"
                    className="bg-graycolor text-gray-400 rounded-md p-4 w-full text-base font-thin sm:leading-6"
                    defaultValue="Rooms"
                >
                    <option>Select Rooms</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select>

                <div className="flex space-x-2 text-primary ">
                    <div style={{ transform: 'rotate(-90deg)' }}>
                        <TuneIcon />
                    </div>
                    <p className='text-sm'>Advance Search</p>
                </div>

                <button className='flex rounded-full py-4   w-full  bg-primary text-white justify-center align-center'>
                    <SearchIcon />
                    <p className='font-thin pl-2'>Search </p>
                </button>
            </div>

        </div>
    )
}

export default SalesForm;