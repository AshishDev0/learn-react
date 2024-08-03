import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {

    // console.log(items);

    return (
        <div className="px-3">
            {items.map((item) => (
                <div key={item.card.info.id} className="border-b border-gray-300 pb-6 pt-4 flex justify-between">
                    <div className="w-9/12">
                        <div className="font-semibold">
                            {item.card.info.name} - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                        </div>
                        <div className="text-sm mt-1">{item.card.info.description}</div>
                    </div>
                    <div className="w-2/12">
                        <img src={CDN_URL + item.card.info.imageId} className="rounded-md object-cover h-[95px] w-full" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;