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
    const { itemCards } = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <div className="resmenu-container">
            <div className="resmenu-card">
                <h1 style={{textAlign: "center", marginBottom: "18px"}}>{name}</h1>
                <h3>{costForTwoMessage}</h3>
                <h3>{cuisines.join(", ")}</h3>
                {
                    itemCards ? (
                        <h3 style={{marginTop: "16px", marginBottom: "6px"}}>Recommended</h3>
                    ) : ''
                }
                <ul style={{maxHeight: "290px", overflowY: "auto"}}>
                    {itemCards?.map((item) => (
                        <li style={{marginBottom: "8px"}} key={item.card.info.id}>{item.card.info.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;