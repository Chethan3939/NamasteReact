import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

   const handleShowItems = () => {
        setShowIndex();
    }

    console.log("category check", data);
    return (
        <div className="w-6/12 mx-auto p-4 m-4 bg-gray-50 shadow-lg">
            <div className=" flex justify-between cursor-pointer " onClick={handleShowItems} >
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span className="text-2xl">{"⬇️"}</span>
            </div>
            
            <div>
               { showItems && <ItemList key={data.categoryId} items={data?.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;