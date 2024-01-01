import Reactangle_17  from '../../assets/Rectangle_17.svg';
import Reactangle_24  from '../../assets/Rectangle_24.svg';
import Reactangle_25  from '../../assets/Rectangle_25.svg';
import Reactangle_26  from '../../assets/Rectangle_26.svg';
import Reactangle_27  from '../../assets/Rectangle_27.svg';
import Reactangle_28  from '../../assets/Rectangle_28.svg';

const NeighborhoodProperties = ({ properties }) => {
    return (
        <div className="container mt-40">
            
            <div className=' text-left ml-10 sm:px-10 md:px-0 lg:px-0 md:w-2/5 lg:w-2/5 z-1'>
                <p className='text-colur1 text-base sm:text-sm md:text-lg lg:text-lg  tracking-widest mb-3'>AREAS ACROSS THE TOWN</p>
                <p className='text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-7'> Neighborhood Properties</p>
                    
            </div>

            <div className="flex flex-wrap space-x-5">

                <div className='rounded-2xl relative'>
                    <img src={Reactangle_17} alt="" srcset="" />
                    <span className='absolute bottom-10 left-10   gap-x-1.5 rounded-full px-4 py-4 text-left'>
                        <p className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300'>216 </p>
                        <p className='text-xl text-white '>  New York City, NY</p>
                    </span>
                </div>

                <div className='rounded-2xl relative'>

                    <img src={Reactangle_25} alt="" srcset="" />
                    <span className='absolute bottom-10 left-10   gap-x-1.5 rounded-full px-4 py-4 text-left'>
                        <p className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300'>141 </p>
                        <p className='text-xl text-white '>  Houston, TX</p>
                    </span>
                </div>

                <div className='rounded-2xl relative'>

                    <img src={Reactangle_26} alt="" srcset="" />
                    <span className='absolute bottom-10 left-10   gap-x-1.5 rounded-full px-4 py-4 text-left'>
                        <p className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300'>212 </p>
                        <p className='text-xl text-white '>  San Diego, CA</p>
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap space-x-5">

                <div className='rounded-2xl relative'>
                    
                    <img src={Reactangle_27} alt="" srcset="" />
                    <span className='absolute bottom-10 left-10   gap-x-1.5 rounded-full px-4 py-4 text-left'>
                        <p className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300'>183 </p>
                        <p className='text-xl text-white '>  Philadelphia, PA</p>
                    </span>
                </div>

                <div className='rounded-2xl relative'>

                    <img src={Reactangle_28} alt="" srcset="" />
                    <span className='absolute bottom-10 left-10   gap-x-1.5 rounded-full px-4 py-4 text-left'>
                        <p className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300'>112 </p>
                        <p className='text-xl text-white '> San Francisco, CA</p>
                    </span>
                </div>
            </div>
            
        </div>
    );
};

export default NeighborhoodProperties;