import {useParams} from 'react-router-dom';
import files from '../../data/propertyLists.json';
import BedIcon from '../../assets/bedIcon.svg';
import BathIcon from '../../assets/bathroomicon.svg';

const Property = () => {
    let {id} = useParams();
    
    id = parseInt(id)
    const property = files.filter((file) => file.id === id);

    return (
        <div className='container'>
            <h1 className='sr-only'>Property {id}</h1>
            <div class="bg-white">
                <section aria-labelledby="features-heading" class="relative ">
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
                    <img src={property[0].source} alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen." class="h-full w-full object-cover rounded-xl object-center lg:h-full lg:w-full" />
                    </div>

                    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
                        <div class="lg:col-start-2">
                            <h2 id="features-heading" class="font-medium text-gray-700">{property[0].title}</h2>
                            <p class="mt-4 text-4xl font-bold tracking-tight text-gray-900">$ {property[0].price}</p>
                            <p class="mt-4 text-gray-500">{property[0].description}
                                </p>
                            <p className='text-sm md:text-base lg:text-base mt-10' >{property[0].address}</p>
                            <dl class="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
                            
                            
                            </dl>
                        </div>
                    </div>
                </section>
                <div className="flex space-x-10 font-thin  mt-10 " >
                  
                    <div className="flex space-x-5">

                        <img src={BedIcon} alt="BedIcon" />
                        <p className='text-textcolor2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold'>{property[0].numberOfBedRooms} Beds</p>
                       
                    </div>
                    
                    <div className="flex space-x-5 ">

                        <img src={BathIcon} alt="BathIcon" className='filter grayscale' />
                        <p  className='text-textcolor2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold'>   {property[0].numberOfBathRooms} Bath</p>
                    </div>
                </div>
                <div className='flex space-x-7 mb-24 mt-5'>
                    <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-500/10">{property[0].tag}</span>
                    <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">{property[0].type}</span>

                </div>
               
            </div>
        </div>
    );
}

export default Property;