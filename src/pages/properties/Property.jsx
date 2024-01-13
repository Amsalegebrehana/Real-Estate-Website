import {useParams} from 'react-router-dom';

const Property = () => {
    let {id} = useParams();
    return (
        <div>
            <h1>Property</h1>
        </div>
    );
}

export default Property;