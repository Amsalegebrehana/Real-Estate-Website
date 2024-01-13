import BedIcon from '../../assets/bedIcon.svg';
import BathIcon from '../../assets/bathroomicon.svg';
const files = [
    {
      id:1,
      title: 'IMG_4985.HEIC',
      size: '3.9 MB',
      address: '1234 Main St',
      numberOfBedRooms: 4,
      numberOfBathRooms: 3,
      price: 200000,
      tag: 'For Sale',
      type: "sell",
      source:
        'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'    
    },
   
    {
        id:2,
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        address: 'CA 94133',
        numberOfBedRooms: 4,
        numberOfBathRooms: 3,
        price: 200000,
        tag: 'For Sale',
        type: "rent",
        source:
          'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'    
      },
      {
        id:3,
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        address: 'Boston MA 02110',
        numberOfBedRooms: 3,
        numberOfBathRooms: 2,
        price: 1500,
        tag: 'Discount',
        type: "rent",
        source:
          'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'    
      },
      {
        id:4,
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        address: 'Austin TX',
        numberOfBedRooms: 2,
        numberOfBathRooms: 1,
        price: 1000,
        tag: 'Popular',
        type: "rent",
        source:
          'https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'    
      },
      {
        id: 5,
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        address: 'Atlanta GA 30303',
        numberOfBedRooms: 4,
        numberOfBathRooms: 3,
        price: 3500,
        tag: 'For Sale',
        type: "rent",
        source:
          'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'    
      },
      {
        id: 6,
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        address: 'Okland CA 94612',
        numberOfBedRooms: 3,
        numberOfBathRooms: 2,
        price: 2000,
        tag: 'Rent',
        type: "rent",
        source:
          'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'    
      },
      {
        id: 7,
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        address: 'Austin TX',
        numberOfBedRooms: 2,
        numberOfBathRooms: 2,
        price: 1450,
        tag: 'Top',
        type: "rent",
        source:
          'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'    
      },
      {
        id: 8,
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        address: '89034 Main St',
        numberOfBedRooms: 3,
        numberOfBathRooms: 2,
        price: 1000,
        tag: 'New Listing',
        type: "sell",
        source:
          'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'    
      },
  ]

const Listings = () => {
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
                            <button class="bg-transparent hover:bg-primary text-primary font-medium hover:text-white py-2 px-6 border border-primary hover:border-transparent rounded-full">
                                All
                            </button>

                            <button class="bg-transparent hover:bg-primary text-primary font-medium hover:text-white py-2 px-6 border border-primary hover:border-transparent rounded-full">
                                Sell
                            </button>

                            <button class="bg-transparent hover:bg-primary text-primary font-medium hover:text-white py-2 px-6 border border-primary hover:border-transparent rounded-full">
                                Rent
                            </button>
                        </div>
                        </div>
                    </div>

                    <div>
                        <ul role="list" className="grid grid-cols-2 mx-3 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {files.map((property) => (
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
                                        <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10 capitalize">{property.type}</span>

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
                        ))}
                        </ul>
                    </div>

            </div>
        </div>
    );
};

export default Listings;