import StarIcon from '@mui/icons-material/Star';
import QuoteIcon from '../../assets/quote.svg'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const Testimonials = () => {
    return(
        <div className="container my-24">
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between md:pl-14 pt-14 pb-2 align-center">

                <div className=' text-left px-5 sm:px-10 md:px-0 lg:px-0 md:w-2/5 lg:w-1/3 z-1 '>
                    <p className='text-colur1 font-medium text-base sm:text-sm md:text-lg lg:text-lg  tracking-wider mb-7'>TESTIMONIALS</p>
                    <p className='text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-7'> Look What Our Customers Say!</p>
                    <p className="text-base font-thin">Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. </p>
                    
                    <div className='hidden sm:flex  space-x-14 mt-5'>

                        <button className="flex p-3 rounded-full mt-5 space-x-2 text-base font-medium border border-colur1 hover:border-colur1  text-colur1 hover:text-white hover:bg-colur1 mr-0">
                            <WestIcon />
                        </button>

                        <button className="flex p-3 rounded-full mt-5 space-x-2 text-base font-medium border  border-colur1 hover:border-colur1  text-colur1 hover:text-white hover:bg-colur1 mr-0">
                            <EastIcon />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col ml-10 sm:flex-col md:flex-row lg:flex-row w-4/5 md:w-2/5 lg:w-2/5 relative shadow-xl rounded-3xl p-7 md:p-16 lg:p-16">
                    <div className=''>

                        <img src={QuoteIcon} alt="" srcset="" className='mb-4'/>
                        <p className="text-base md:text-lg lg:text-lg text-left font-medium">I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!</p>
                        <hr className='mt-7'/>
                        <div className="flex justify-between mt-4 ">
                            <img className="h-14 w-14 rounded-full bg-gray-50" src='https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.webp' alt="" />
                            <p className='flex justify-center items-center text-sm md:text-lg lg:text-lg font-medium'>Barbara D. Smith</p>
                            <div className="flex items-center ml-5">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                    key={rating}
                                    className='text-yellow-400  flex-shrink-0'
                                    aria-hidden="true"
                                    style={{ fontSize: '1.2rem' }}
                                />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute hidden sm:flex flex-col  -right-4 justify-center items-center ml-5 ">
                        <div className="h-14 w-1 bg-gray-400 my-1 rounded"></div>
                        <div className="h-14 w-1 bg-gray-200 my-1 rounded"></div>
                        <div className="h-14 w-1 bg-gray-200 my-1 rounded"></div>
                    </div>
                    <div className="absolute sm:hidden flex flex-row   -bottom-5 space-x-5 justify-center items-center ml-5 ">
                        <div className="h-1 w-14 bg-gray-400 my-1 rounded"></div>
                        <div className="h-1 w-14 bg-gray-300 my-1 rounded"></div>
                        <div className="h-1 w-14 bg-gray-300 my-1 rounded"></div>
                    </div>
                </div>
                
              
                
            </div>
        </div>
    )
}

export default Testimonials;