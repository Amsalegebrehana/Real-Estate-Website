import agentimg from '../../assets/agentimg.svg';

const AgentSection = () => {
    return (
        <div className="container mt-36 mb-24">
            <div className="bg-primary rounded-3xl">
                <div className="flex  px-10 h-100 space-x-7">
                        <img src={agentimg} alt="" srcset="" />
                        
                        <div className='flex py-10 justify-center items-center'>

                            <div className='text-left  space-y-5 '>
                                <p className="text-white font-semibold text-4xl">Become a Agent.</p>
                                <p className="text-white text-base text-left w-3/5">Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque. </p>
                            </div>
                            <div>
                                <button className="px-7 py-3 rounded-full bg-white">
                                    <p className="text-primary text-center font-medium text-lg">Register Now</p>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default AgentSection;