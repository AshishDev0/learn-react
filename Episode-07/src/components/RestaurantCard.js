import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj, restaurantCardStyle } = props;

  return (
    <div
      style={{
        width: "250px",
        padding: "0px 0px",
      }}
    >
      <div className="card-container">
        <img
          className="card-img"
          src={CDN_URL + resObj.info.cloudinaryImageId}
        />
        <h3 style={restaurantCardStyle}>{ resObj.info.name }</h3>
        <h4>{ resObj.info.cuisines.slice(0, 5).join(", ") }</h4>
        <h4>{ resObj.info.avgRating } stars</h4>
        <h4>{ resObj.info.sla.deliveryTime } minutes</h4>
        <h4>{ resObj.info.costForTwo }</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;