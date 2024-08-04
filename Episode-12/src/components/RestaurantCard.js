import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;

  return (
    <div className="w-[250px] h-[100%] p-3">
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

/**
 * 1. higher order component is a js function that takes a component and returns a component
 * 2. HOC does not modify the passed component. it enhances the passed component or 
 *    add something on top of the passed component.
 */
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-slate-300 px-2 pb-1 rounded-tl-md">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;