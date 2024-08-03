import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resData = useRestaurantMenu(resId);

    const noOfShimmerAccordion = new Array(5).fill(null);

    const [showIndex, setShowIndex] = useState(null);

    // console.log(resData);

    if (resData === null) {
        return (
            <div className="w-6/12 mx-auto pt-[168px] pb-12">
                {noOfShimmerAccordion.map((item, i) => (
                    <div className="bg-cyan-50 mb-4 pl-4 pr-3 shadow-md py-3" key={i}>
                        <div className="font-bold flex justify-between">
                            <span></span>
                            <span>🔻</span>
                        </div>
                    </div>
                ))}
            </div>
        )
    };

    const { name, costForTwoMessage, cuisines } = resData?.cards[2]?.card?.card?.info
    const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item) => item?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories)

    return (
        <div className="w-6/12 mx-auto py-12">
            <div className="font-bold mb-8 text-center">
                <div className="font-bold text-2xl mb-2">{name}</div>
                <div>{costForTwoMessage}</div>
                <div className="text-rose-500">{cuisines.join(", ")}</div>
            </div>
            <div>
                {categories.map((category, i) => (
                    <RestaurantCategory
                        key={category.card.card.title}
                        data={category.card.card}
                        expand={i == showIndex && true}
                        setShowIndex={() => showIndex != i ? setShowIndex(i) : setShowIndex(null)}
                    />
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;