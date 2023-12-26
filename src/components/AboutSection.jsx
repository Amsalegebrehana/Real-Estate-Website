import SmartHomIcon from '../assets/smarthome.svg';
import UserIcon from '../assets/user.svg';
import Rectangle_14 from '../assets/Rectangle_14.svg';
import Rectangle_15 from '../assets/Rectangle_15.svg';
import Rectangle_16 from '../assets/Rectangle_16.svg';
import LetterCircle from '../assets/Group_2x.svg';

const AboutSection = () => {
    return (
        <div className='container'>

            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between  py-14 align-center '>
                <div className=' text-left px-2 sm:px-10 md:px-0 lg:px-0 md:w-4/5 lg:w-2/5 z-1'>
                    <p className='text-colur1 font-medium text-base sm:text-lg md:text-xl lg:text-xl  tracking-wide mb-7'>WHO ARE WE</p>
                    <p className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-7'> Assisting individuals in locating the appropriate real estate.</p>
                    <p className='text-base font-thin text-textcolor3 mb-10'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
                    
                    <div className="bg-white shadow-xl rounded-3xl w-4/5 flex p-10 space-x-10 align-center">
                        <img src={SmartHomIcon} alt='icon' />
                        <div className='text-left'>
                            <p className='text-colur1 text-base sm:text-lg md:text-xl lg:text-xl'>Donec porttitor euismod</p>
                            <p className='text-textcolor3 font-thin text-sm sm:text-sm md:text-base lg:text-base mt-1'>Nullam a lacinia ipsum, nec  dignissim purus. Nulla</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-xl rounded-3xl w-4/5 flex p-10 mt-5  space-x-9  align-center">
                        <img src={UserIcon} alt='icon' />
                        <div className='text-left '>
                            <p className='text-colur1 text-base sm:text-lg md:text-xl lg:text-xl'>Donec porttitor euismod</p>
                            <p className='text-textcolor3 font-thin text-sm sm:text-sm md:text-base lg:text-base mt-1'>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
                        </div>
                    </div>
                </div>

                <div className='flex space-x-2 mt-5'>
                    <div className='mt-7  rounded-xl'>
                        <img src={Rectangle_14} alt="" className='h-full' />
                    </div>
                    <div className='rounded-xl'>
                        <img src={Rectangle_15} alt="" />
                        
                        <img src={Rectangle_16} alt="" />
            
                    </div>
                </div>
                    
            </div>
        </div>
    )
};

export default AboutSection;