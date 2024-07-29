import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";


const useRestaurantMenu = (resId) => {
    const [resData, setResData] = useState(null)

    // console.log('useRestaurantMenu hook render 1')

    useEffect(() => {
        // console.log('useRestaurantMenu hook useEffect')
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();

        setResData(json?.data);
    }

    // console.log('useRestaurantMenu hook render 2')

    return resData;
}

export default useRestaurantMenu;