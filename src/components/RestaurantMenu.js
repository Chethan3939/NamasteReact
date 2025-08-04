import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestauranMenu from "../utils/useRestauranMenu";
import { Link } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {

  // const [menuInfo, setMenuInfo] = useState(null);

  const {id} = useParams();

  const menuInfo = useRestauranMenu(id);

  const [showIndex, setShowIndex] = useState(0);

  const {logginUser} = useContext(UserContext);

  console.log("menuInfo check", menuInfo)

    if (!menuInfo) return <Shimmer />;

const {name, cuisines, areaName , city, costForTwoMessage, cloudinaryImageId  } = menuInfo?.cards[2]?.card?.card?.info;

const {itemCards} = menuInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


const  menucards = menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(x => x.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

console.log(menucards);

if (!itemCards) return <h1>No Menu Items Found</h1>;

  return (
    <div className="restaurantMenu-container">
      <div className="p-4 m-4 text-3xl rounded-4xl"> 
        <Link to="/">{"⬅️"}</Link>
      </div>
      <div className="p-4 m-4 text-center">
        <img className="w-72 mx-auto my-2 rounded-lg shadow-md" src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant-logo" />
        <h1 className="text-3xl font-bold my-2" >Name : {name}</h1>
        <h1 className="text-xl my-2">Cuisines : {cuisines.join(", ")}</h1>
        <h1 className="text-xl my-2" >Location: {areaName + ' ' + city}</h1>
        <h1 className="text-xl my-2" >Cost for two : {costForTwoMessage}</h1>
        <h1 className="text-xl my-2" >UserName : {logginUser} </h1>
        <h2 className="text-xl font-bold my-2">Menu</h2>
        <ul>
          {
              menucards.map((category, index) => (
                //controller component here
                <RestaurantCategory key={category.card.card.categoryId}
                 data = {category.card.card}
                 showItems = { index === showIndex ? true : false}
                 setShowIndex = {()=> setShowIndex(index)}
                 
                 />
              ))
          }
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
