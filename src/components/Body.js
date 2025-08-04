import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_API_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaturants, setfilteredRestaturants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

  const { logginUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    console.log("useEffect called".RESTAURANT_API_URL);
    fechData();
  },[]);

  const fechData = async () => {
    const data = await fetch(RESTAURANT_API_URL);
    const json = await data.json();
    console.log(json);
    console.log(
      json.data.cards[4].card.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(!onlineStatus){
    return (
      <div>
        <h1>Looks like you are offline please check your internet</h1>
      </div>
    )
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />; // Show shimmer effect while data is being fetched
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="flex gap-4 p-4">
          <input
            className="px-2 border border-solid border-black rounded-lg"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 py-1 m-1 bg-blue-200 rounded-lg" onClick={()=>{
            const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredRestaurants);
            setfilteredRestaturants(filteredRestaurants);
          }} 
          >Search</button>
          <button
          className="px-4 py-1 m-1 bg-blue-200 rounded-lg"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            console.log(filteredRestaurants);
            setfilteredRestaturants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label className="font-bold"> UserName : </label>
          <input className="p-2 border-2 border-black" onChange={(e)=> setUserName(e.target.value) } />
        </div>
        </div>

        
      </div>
      <div className="p-4 m-4 flex flex-wrap">
        {filteredRestaturants.map((restaurant) => (
          <Link key={restaurant.info.id} to={'/restaurantMenu/'+ restaurant.info.id} >

            { restaurant?.info?.isOpen ? <RestaurantCardWithPromotedLabel resData={restaurant} key={restaurant.info.id} /> : <RestaurantCard resData={restaurant} key={restaurant.info.id} />}
            <h1 className="text-center text-red-500 font-bold">{logginUser}</h1>
          
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
