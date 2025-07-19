import { useEffect, useState } from "react";

import { RESTAURANT_MENU_API_URL } from "./constants";

const useRestauranMenu = (id) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_MENU_API_URL + id);

        const json = await data.json();

        console.log(json);

        setResInfo(json.data)

    }


    return resInfo;
}

export default useRestauranMenu;



