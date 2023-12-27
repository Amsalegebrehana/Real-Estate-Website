import BedIcon from '../../assets/bedIcon.svg'
import BathIcon from '../../assets/bathroomicon.svg';
import FireIcon from '../../assets/fireicon.svg';
import FilledHomeIcon from '../../assets/filledhomeicon.svg';
import DollarIcon from '../../assets/Vector.svg';

const PropertyCard = ({ property }) => {
    return (
        <div className="w-11/12">
            <div className='flex flex-col'>
            <div className='rounded-2xl relative'>
                <img src={require(`../../assets/Rectangle_${property.id}.svg`)} alt="" />
                <span className={`absolute bottom-7 left-4 inline-flex items-center gap-x-1.5 rounded-full px-4 py-2 text-base font-medium text-gray-600 
                    ${property.tag === 'Popular' ? 'bg-red-100 text-red-600' : 
                    property.tag === 'New Listing' ? 'bg-blue-100 text-blue-500' : 
                    property.tag === 'Discounted Price' ? 'bg-green-100 text-green' : ''}`}>
                    {property.tag === 'Popular' && <img src={FireIcon} alt="" />}
                    {property.tag === 'New Listing' && <img src={FilledHomeIcon} alt="" />}
                    {property.tag === 'Discounted Price' && <img src={DollarIcon} alt="" />}
                    {property.tag}
                </span>
            </div>

                <div className='text-left mt-5 space-y-2'>
                    <p className='text-lg md:text-xl lg:text-2xl font-medium'>$ {property.price}</p>
                    <p className='text-sm md:text-base lg:text-base font-medium'>{property.title}</p>
                    <p className='text-sm md:text-sm lg:text-sm font-thin text-textcolor3'>{property.address}</p>
                    <div className="flex space-x-3 font-thin text-textcolor3" >
                        {/* <BedIcon />  */}
                        <img src={BedIcon} alt="BedIcon" />
                        <p className='text-textcolor2'>{property.numberOfBedRooms} Beds</p>
                        {/* <BathIcon /> */}
                        <img src={BathIcon} alt="BathIcon" className='filter grayscale' />
                        <p  className='text-textcolor2 '>   {property.numberOfBathRooms} Bath</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;