import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = ({ restaurantCardStyle }) => {
  const [resData, setResData] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            console.log(resData);
            const filteredData = resData.filter((res) => {
              return res.info.avgRating > 4.2;
            })
            setResData(filteredData);
            console.log(resData); // prints the same resData because useState is asynchronous in nature
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {resData.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resObj={restaurant}
            restaurantCardStyle={restaurantCardStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
