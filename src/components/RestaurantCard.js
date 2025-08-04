import { IMG_CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props)=>{
    const { resData} = props;
    const { name, cuisines, avgRatingString, sla, cloudinaryImageId } = resData.info;

    const {loggingUser} = useContext(UserContext);

    let imgUrl = IMG_CDN_URL + cloudinaryImageId;

    return (
        <div className='m-4 p-4 w-[300px] bg-gray-100 hover:bg-gray-200'  >
            <img className='restaurant-logo' src={imgUrl} alt="restaurant-logo" />
            <h3 className='restaurant-name'>{name}</h3>
            <h3 className='restaurant-name'>{loggingUser}</h3>
            <h4 className='restaurant-rating'>{avgRatingString}</h4>
            <h4 className='restaurant-cuisine'>{cuisines.join(', ')}</h4>
            <h4 className='restaurant-delivery-time'>Delivery Time: { sla?.deliveryTime} mins</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <h2 className='absolute bg-black text-white p-2 m-2 rounded-lg'>Opened</h2>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;