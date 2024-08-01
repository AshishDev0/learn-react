import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();

    // console.log('RestaurantMenu render 1')

    const resData = useRestaurantMenu(resId);

    useEffect(() => {
        // console.log('RestaurantMenu useEffect')
    }, [])

    // console.log('RestaurantMenu render 2')

    if (resData === null) {
        return (
            <div className="resmenu-container">
                <div className="resmenu-card" style={{height: "500px"}}>
                </div>
            </div>
        )
    };

    const { name, costForTwoMessage, cuisines } = resData?.cards[2]?.card?.card?.info
    const { itemCards } = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div className="flex items-center justify-center h-[88dvh]">
            <div className="bg-cyan-50 px-4 pb-3 rounded-md shadow-md w-[36%] max-h-[390px] overflow-y-auto">
                <h1 className="font-semibold text-center text-lg pb-2 sticky top-0 pt-4 bg-cyan-50">{name}</h1>
                <h3>{costForTwoMessage}</h3>
                <h3>{cuisines.join(", ")}</h3>
                {
                    itemCards ? (
                        <h3 className="font-medium mt-5 mb-2">Recommended</h3>
                    ) : ''
                }
                <ul>
                    {itemCards?.map((item) => (
                        <li className="flex justify-between mb-2" key={item.card.info.id}>
                            <span>{item.card.info.name}</span>
                            <span>₹{item.card.info.price ? (item.card.info.price / 100) : (item.card.info.defaultPrice / 100)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;