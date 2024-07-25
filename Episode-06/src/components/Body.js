// ```````````````````````````````````````````useEffect````````````````````````````````````````````````````````


// import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
// import { useEffect, useState } from "react";

// const Body = ({ restaurantCardStyle }) => {
//   const [resData, setResData] = useState(restaurantList);

//   useEffect(() => {
//     console.log('useEffect called!')
//   }, [])

//   console.log('Component Loading!')

//   return (
//     <div className="body">
//       <div className="filter-container">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             console.log(resData);
//             const filteredData = resData.filter((res) => {
//               return res.info.avgRating > 4.2;
//             })
//             setResData(filteredData);
//             console.log(resData); // prints the same resData because useState is asynchronous in nature
//           }}
//         >
//           Top Restaurants
//         </button>
//       </div>
//       <div className="restaurant-container">
//         {resData.map((restaurant) => (
//           <RestaurantCard
//             key={restaurant.info.id}
//             resObj={restaurant}
//             restaurantCardStyle={restaurantCardStyle}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;


// ``````````````````````````````````````````````fetch `````````````````````````````````````````````````````````````````


/**
 * Fetch is not given by javascript.
 * Fetch is given by js engine (i.e., Browsers)
 */


import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";

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

  /**
   * called conditional rendering
   * we can use ternary operator and have only one return 
   */
  // if (resData.length == 0) {
  //   return (
  //     <ShimmerCard />
  //   )
  // }

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