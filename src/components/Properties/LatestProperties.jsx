import Properties from '../../data/Properties';
import PropertyCard from './PropertyCard';

const LatestProperties = () => {

    return (
      

        <div className="container">
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between md:pl-14 pt-14 pb-2 align-center">
                
                <div className=' text-left px-5 sm:px-10 md:px-0 lg:px-0 md:w-2/5 lg:w-2/5 z-1'>
                    <p className='text-colur1 font-medium text-base sm:text-sm md:text-lg lg:text-lg  tracking-wide mb-7'>CHECKOUT OUR NEW</p>
                    <p className='text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-7'> Latest Listed Properties</p>
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

            <div className='flex flex-row overflow-x-auto space-x-5 pl-5 md:pl-14 lg:pl-14  py-2 align-center'>
                {
                    Properties.map((property) => {
                        return (
                            <div key={property.id} className="flex-none">
                                <PropertyCard property={property} />
                            </div>
                        )
                    })
                }
            </div>

        </div>

   
    )
};

export default LatestProperties;