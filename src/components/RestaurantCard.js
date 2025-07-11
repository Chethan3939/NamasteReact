import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const { resData} = props;
    const { name, cuisines, avgRatingString, sla, cloudinaryImageId } = resData.info;
    let imgUrl = IMG_CDN_URL + cloudinaryImageId;
    return (
        <div className='restaurant-card'  >
            <img className='restaurant-logo' src={imgUrl} alt="restaurant-logo" />
            <h3 className='restaurant-name'>{name}</h3>
            <h4 className='restaurant-rating'>{avgRatingString}</h4>
            <h4 className='restaurant-cuisine'>{cuisines.join(', ')}</h4>
            <h4 className='restaurant-delivery-time'>Delivery Time: { sla?.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;