import image1 from '../assets/h.jpg';

  export default function Avatar() {
    return (
        <div className="group ml-14  p-7 bg-white rounded-full shadow-lg">

                <div className="flex justify-center space-x-4">
                    <div>
                        <img
                        className="inline-block h-14 w-14 rounded-full"
                        src={image1}
                        alt=""
                        />
                    </div>
                    <div className="">
                        <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900">200+ New</p>
                        <p className="ml-7 text-lg font-medium text-gray-700 group-hover:text-gray-700">Listings Everyday!</p>
                    </div>
                </div>
            
        </div>
    )
  }
  
  
