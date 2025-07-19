import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_API_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaturants, setfilteredRestaturants] = useState([]);

  const [searchText, setSearchText] = useState("");

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
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={()=>{
            const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredRestaurants);
            setfilteredRestaturants(filteredRestaurants);
          }} 
          >Search</button>
        </div>

        <button
          className="filter-btn"
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
      </div>
      <div className="restaurant-container">
        {filteredRestaturants.map((restaurant) => (
          <Link key={restaurant.info.id} to={'/restaurantMenu/'+ restaurant.info.id} >
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
