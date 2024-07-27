import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";

const Body = ({ restaurantCardStyle }) => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = 
      await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return filteredRestaurantList.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
        <div className="filter-container">
          <div>
            <input type="text" className="input-search" value={searchString}
              onChange={(e) => { setSearchString(e.target.value) }} />
            <button
              className="filter-btn"
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
              className="filter-btn"
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
      <div className="restaurant-container">
        {filteredRestaurantList.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} className="resCardMenu-container">
            <RestaurantCard
              resObj={restaurant}
              restaurantCardStyle={restaurantCardStyle}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;