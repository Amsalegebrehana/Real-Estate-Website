
import Rectangle_35 from '../../assets/Rectangle_35.svg';
import Rectangle_36 from '../../assets/Rectangle_36.svg';
import Rectangle_37 from '../../assets/Rectangle_37.svg';
import EastIcon from '@mui/icons-material/East';

import posts from '../../data/blog.json'

const LatestBlogs = () =>{
    return(
        <div className="bg-primary mt-36">
             <div className="container p-10 md:p-24 lg:p-24">
                <p className='mb-7 text-white text-lg tracking-widest font-meduim'>WHAT’S TRENDING</p>
                <p className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-7">Latest Blogs & Posts</p>
                
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start space-x- justify-between">

                            <div className="relative w-full">
                                <img
                                src={post.imageUrl}
                                alt=""
                                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                               
                                <span className='absolute bg-white top-0 left-10  rounded-b-xl  px-3 text-left'>
                                    <p className=' text-lg font-medium'>{post.day} </p>
                                    <p className='text-lg font-thin  text-textcolor3'>{post.datetime}</p>
                                </span>
                            </div>
                            <div className="max-w-xl">
                                
                                <div className="group text-left mt-5">
                                    <p className="mt-3 text-lg md:text-2xl lg:text-2xl font-normal text-white">
                                      
                                        {post.title}
                                    </p>
                                    <p className="mt-5 line-clamp-3 text-base font-thin leading-6 text-textcolor5">{post.description}</p>
                                </div>
                                
                            </div>
                            <div className='flex space-x-56 md:space-x-56  lg:space-x-64'>
                                <div className="sr-only">
                                
                                    <div className="flex p-3 rounded-full mt-5 space-x-2 text-base font-medium bg-white text-primary mr-0">
                                        <EastIcon />
                                    </div>
                              
                                </div>
                                <a href='/' className='flex justify-end'>
                                    <div className="flex p-3 rounded-full mt-5 space-x-2 text-base font-medium bg-white text-primary mr-0">
                                        <EastIcon />
                                    </div>
                                </a>
                            </div>
                           
                    </article>
                ))}
                </div>
      </div>
        </div>
    )
}

export default LatestBlogs;