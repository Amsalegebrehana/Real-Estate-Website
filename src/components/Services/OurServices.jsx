import SearchIcon from '../../assets/whiteicon_search.svg';
import BedIcon from '../../assets/whiteicon_bed.svg';
import HomeIcon from '../../assets/whiteicon_home.svg';

const Services = () => {
    return(
        <div className="bg-gray-100 mt-36">
            <div className="container p-10 md:p-24 lg:p-24">
                <p className='mb-7  text-lg tracking-widest font-meduim'>OUR SERVICES</p>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-7">Donec porttitor euismod dignissim</p>
                
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row space-y-5 md:space-x-10 lg:space-x-10 mt-10">
                    
                    <div className="flex flex-col px-18 py-14 bg-white shadow-2xl rounded-3xl justify-center items-center">
                        <div className='bg-colur1 w-20 h-20 flex shadow-2xl items-center justify-center rounded-full p-4'>
                            <img src={SearchIcon} alt="" srcSet="" />
                        </div>
                        <p className='text-lg  md:text-xl lg:text-xl mt-10 mb-2'>Buy a New Home</p>
                        <p className='flex text-sm text-textcolor3 text-center px-14 font-thin'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                    </div>

                    <div className="flex flex-col px-18 py-14 bg-white shadow-2xl rounded-3xl justify-center items-center">
                        <div className='bg-colur1 w-20 h-20 flex shadow-xl items-center justify-center rounded-full p-4'>
                            <img src={HomeIcon} alt="" srcset="" />
                        </div>
                        <p className='text-lg mt-10 md:text-xl lg:text-xl mb-2'>Sell a House</p>
                        <p className='text-sm text-textcolor3 px-14 font-thin text-center'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                    </div>

                    <div className="flex flex-col px-18 py-14 bg-white shadow-2xl rounded-3xl justify-center items-center">
                        <div className='bg-colur1 w-20 h-20 flex  shadow-2xl items-center justify-center rounded-full p-4'>
                            <img src={BedIcon} alt="" srcset="" />
                        </div>
                        <p className='text-lg mt-10 md:text-xl lg:text-xl mb-2'>Rent a House</p>
                        <p className='text-sm text-textcolor3 px-14 font-thin'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Services;