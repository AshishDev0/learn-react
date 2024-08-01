import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchString, setSearchString] = useState("");

  // console.log(filteredRestaurantList)

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = 
      await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    // console.log(json);
    // console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurantList(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // console.log('after' + listOfRestaurant);
  }

  const status = useOnlineStatus();

  if (!status)
    return <h1>Looks like you're offline</h1>

  return filteredRestaurantList?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body px-14">
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
        </div>
      <div className="flex flex-wrap gap-x-9 gap-y-10 justify-start pb-11">
        {filteredRestaurantList?.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} className="">
            <RestaurantCard
              resObj={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;