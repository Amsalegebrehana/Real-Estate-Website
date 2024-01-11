import AboutSection from "../components/AboutSection";
import Rectangle_14 from '../assets/Rectangle_14.svg';
import Rectangle_15 from '../assets/Rectangle_15.svg';
import Rectangle_16 from '../assets/Rectangle_16.svg'
import SmartHomIcon from '../assets/smarthome.svg';
import UserIcon from '../assets/user.svg';
import searchrealestate from '../assets/searchrealestate.jpg';
import timeline from '../data/timeline.json'

const About = () => {

    return (
        <div className="container">

            <div className="overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 pb-32 pt-10 sm:pt-10 md:pt-2 lg:px-8 lg:pt-0">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                    <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <p className='text-colur1 font-medium text-base sm:text-lg md:text-xl lg:text-xl  tracking-wide mb-7'>WHO ARE WE</p>
                   
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-900 sm:text-xl md:text-2xl lg:text-4xl">
                            Finding Your Dream Home Just Got Easier by Rezilla
                        </h1>
                        <p className="relative mt-6 text-sm text-textcolor3 sm:text-base md:text-lg lg:text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                            Buying or selling a home is a big life decision, and navigating the real estate market can be overwhelming. <br/> That's where Rezilla comes in, your one-stop shop for all things real estate.
                            
                            With our powerful search tools, immersive visuals, valuable resources, and expert connections, 
                            we're here to make your real estate journey smooth, informed, and ultimately, successful.
                        </p>
                    </div>
                    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                        <div className="relative">
                            <img
                                src={Rectangle_16} alt=""
                                className="aspect-[2/3] w-full h-96 rounded-xl bg-white object-cover shadow-lg"
                            />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                        <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                            alt=""
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                            alt=""
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                        <div className="relative">
                        <img
                            src={Rectangle_14}  alt=""
                            className="aspect-[2/3] w-full rounded-xl bg-white object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div className="relative">
                        <img
                            src={Rectangle_15}
                             alt=""
                            className="aspect-[2/3] w-full h-full rounded-xl bg-white object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
             </div>
  
            {/*  */}
            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row  md:pl-14 py-14  '>
                <div className=''>
                    <img src={searchrealestate} className="w-4/5 h-full rounded-2xl" alt="" />
                </div>
                <div className=' text-left '>
                    <p className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-7'> Unleash the Power of Search</p>
                    <p className='text-colur1 font-medium text-base sm:text-lg md:text-xl lg:text-xl  tracking-wide mb-7'> Imagine this</p>
                    <p className='text-base font-thin text-textcolor3 mb-10'>
                        No more scouring endless listings on multiple platforms. Our user-friendly interface lets you search for properties with ease, using advanced filters like price range, neighborhood, property type, and even desired amenities. 
                        Whether you're seeking a cozy downtown condo or a sprawling suburban sanctuary, we'll help you find your perfect match.
                    </p>
                    
                    <div className="flex space-x-2">
                        <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-primary ring-1 ring-inset ring-gray-500/10">
                            User-friendly
                        </span>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600">
                            Perfect match
                        </span>
                        <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                            Easy
                        </span>
                    </div>
            </div>

            
                    
            </div>
            {/* <h1>About</h1> */}
             {/* Timeline section */}
                <div className="mx-auto mt-16 mb-16 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {timeline.map((item) => (
                    <div key={item.name}>
                        <time
                        dateTime={item.dateTime}
                        className="flex items-center text-sm font-medium leading-6 text-indigo-600"
                        >
                        <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                            <circle cx={2} cy={2} r={2} fill="currentColor" />
                        </svg>
                        {item.date}
                        <div
                            className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                            aria-hidden="true"
                        />
                        </time>
                        <p className="mt-6 text-lg font-medium leading-8  text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm  leading-7 text-textcolor3">{item.description}</p>
                    </div>
                    ))}
                </div>
                </div>
        </div>
    )
};

export default About;