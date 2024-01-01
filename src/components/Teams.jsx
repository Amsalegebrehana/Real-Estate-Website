
import Rectangle_29 from '../assets/Rectangle_29.svg';
import Rectangle_30 from '../assets/Rectangle_30.svg';
import Rectangle_31 from '../assets/Rectangle_31.svg';
import Rectangle_32 from '../assets/Rectangle_32.svg';

const Teams = ()=>{

    return (

        <div className="container mt-28">

            <p className='mb-3  text-lg tracking-widest font-meduim text-colur1 '>INTRODUCE YOURSELF TO  </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-20">Our Team of Experts</p>

            <div className="flex flex-wrap justify-center space-x-5 sm:space-x-7 md:space-x-14 lg:space-x-14 space-y-5">

                <div className='space-y-3 w-40 sm:w-40 md:w-44 lg:w-48 mt-5'>
                    <img src={Rectangle_29} alt="" srcset="" />
                    <p className='font-medium text-lg md:text-2xl lg:text-2xl '>Brendon M</p>
                    <p className='text-colur1 text-sm sm:text-sm md:text-base lg:text-base'>CEO & Founder</p>
                </div>

                <div className='space-y-3 w-40 sm:w-40 md:w-44 lg:w-48'>
                    <img src={Rectangle_30} alt="" srcset="" />
                    <p className='font-medium text-lg md:text-2xl lg:text-2xl'>Jodi J. Appleby</p>
                    <p className='text-colur1 text-sm sm:text-sm md:text-base lg:text-base'>Real Estate Developer</p>
                </div>

                <div className='space-y-3 w-40 sm:w-40 md:w-44 lg:w-48'>
                    <img src={Rectangle_31} alt="" srcset="" />
                    <p className='font-medium text-lg md:text-2xl lg:text-2xl'>Justin S. Meza</p>
                    <p className='text-colur1 text-sm sm:text-sm md:text-base lg:text-base'>Listing Agent</p>
                </div>

                <div className='space-y-3 w-40 sm:w-40 md:w-44 lg:w-48'>
                    <img src={Rectangle_32} alt="" srcset="" />
                    <p className='font-medium text-lg md:text-2xl lg:text-2xl'>Susan T. Smith</p>
                    <p className='text-colur1 text-sm sm:text-sm md:text-base lg:text-base'>Buyer's Agent</p>
                </div>
            </div>
                
        </div>
    )
}

export default Teams;