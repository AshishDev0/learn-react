import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchString, setSearchString] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = 
      await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((item, i) => {
      if (i == 0 || i == 2 || i == json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.length - 1)
        item.info.promoted = true;
      else 
        item.info.promoted = false;
    })

    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  const status = useOnlineStatus();

  if (!status)
    return <h1>Looks like you're offline</h1>

  const { setUserData, loggedInUser } = useContext(UserContext)

  return filteredRestaurantList?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="px-14">
        <div className="flex items-center gap-4 py-9">
          <div className="">
            <input type="text" className="border-rose-600 py-1 shadow appearance-none border px-2 leading-tight focus:outline-none focus:shadow-outline text-rose-600" value={searchString}
              onChange={(e) => { setSearchString(e.target.value) }} />
            <button
              className="bg-rose-600 px-8 py-1 text-white rounded-sm"
              style={{ marginLeft: 0, paddingInline: "34px" }}
              onClick={() => {
                const searchList = listOfRestaurant.filter((item) => {
                  if (item.info.name.toLowerCase().includes(searchString.toLowerCase())) {
                    return item;
                  }
                })
                setFilteredRestaurantList(searchList);
              }}
            >
              Search
            </button>
          </div>
          <div>
            <button
              className="bg-rose-600 px-8 py-1 text-white rounded-sm"
              onClick={() => {
                const filteredData = filteredRestaurantList.filter((res) => {
                  return res.info.avgRating > 4.2;
                })
                setFilteredRestaurantList(filteredData);
              }}
            >
              Top Restaurants
            </button>
          </div>
          <div className="">
            <input type="text" className="border-rose-600 py-1 shadow appearance-none border px-2 leading-tight focus:outline-none focus:shadow-outline text-rose-600" value={loggedInUser}
              onChange={(e) => setUserData(e.target.value) } />
          </div>
        </div>
      <div className="flex flex-wrap gap-x-9 gap-y-10 justify-start pb-11">
        {filteredRestaurantList?.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} 
            className="bg-cyan-50 rounded-md shadow-md hover:bg-cyan-100">
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resObj={restaurant} />
            ) : (
              <RestaurantCard resObj={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;