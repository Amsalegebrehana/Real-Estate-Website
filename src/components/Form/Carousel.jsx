import React from 'react';
import image1 from '../../assets/h.jpg';
import image2 from '../../assets/m.jpg';
import image3 from '../../assets/v.png';
import image4 from '../../assets/t.webp';
const Carousel = () => {
    return (
        <div id="default-carousel" className="relative w-full mt-14" data-carousel="slide">

            <div className="relative h-96 overflow-hidden rounded-3xl md:h-96">
                <div className="hidden duration-700 ease-in-out rounded-full" data-carousel-item>
                    <img src={image1} className="h-96 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* Item 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={image2} className="h-96 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* Item 3 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={image3} className="h-96 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* Item 4 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={image4} className="h-96 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* Item 5 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={image1} className="h-96 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="__ __ __" />
                </div>
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 -bottom-4 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-24 h-1 rounded-full bg-primary " aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-24 h-1 rounded-full bg-gray-200 " aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-24 h-1 rounded-full bg-gray-200 " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-24 h-1 rounded-full bg-gray-200 " aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-24 h-1 rounded-full bg-gray-200 " aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>

            {/* Slider controls */}
            <button type="button" className="absolute top-0 start-0 z-30 -left-10  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-white dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-gray-400 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button type="button" className="absolute top-0 end-0 z-30 -right-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-white/90 dark:bg-gray-800/30 group-hover:bg-white  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-gray-400 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>

        </div>
    );
};

export default Carousel;