import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestauranMenu from "../utils/useRestauranMenu";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {

  // const [menuInfo, setMenuInfo] = useState(null);

  const {id} = useParams();

  const menuInfo = useRestauranMenu(id);

  console.log("menuInfo check", menuInfo)

    if (!menuInfo) return <Shimmer />;

const {name, cuisines, areaName , city, costForTwoMessage  } = menuInfo?.cards[2]?.card?.card?.info;

const {itemCards} = menuInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log(itemCards);

if (!itemCards) return <h1>No Menu Items Found</h1>;

  return (
    <div className="restaurantMenu-container">
      <div> 
        <Link to="/">{`< Back to Home`}</Link>
      </div>
      <div>
        <h1>Name : {name}</h1>
        <h1>Cuisines : {cuisines.join(", ")}</h1>
        <h1>Location: {areaName + ' ' + city}</h1>
        <h1>Cost for two : {costForTwoMessage}</h1>
        <h2>Menu</h2>
        <ul>
          {
              itemCards.map((item) => (
                  <li key={item.card.info.id} >{item.card.info.name} - Rs.{item.card.info.price/ 100 || item.card.info.defaultPrice /100 }</li>
              ))
          }
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
