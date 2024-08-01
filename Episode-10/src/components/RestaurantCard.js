import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;

  return (
    <div className="w-[250px] h-[100%] bg-cyan-50 p-3 rounded-md shadow-md hover:bg-cyan-100">
      <img
          className="h-[150px] w-[100%] object-cover rounded-md mb-3"
          src={CDN_URL + resObj.info.cloudinaryImageId}
        />
        <h3 className="font-medium">{ resObj.info.name }</h3>
        <h4>{ resObj.info.cuisines.slice(0, 5).join(", ") }</h4>
        <h4>{ resObj.info.avgRating } stars</h4>
        <h4>{ resObj.info.sla.deliveryTime } minutes</h4>
        <h4>{ resObj.info.costForTwo }</h4>
    </div>
  );
}

export default RestaurantCard;