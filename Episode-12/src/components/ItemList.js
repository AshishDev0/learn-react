import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="px-3">
            {items.map((item, index) => (
                <div key={item.card.info.id} className={`${index != items.length - 1 ? 'border-b' : ''} border-gray-300 pb-6 pt-4 flex justify-between`}>
                    <div className="w-9/12">
                        <div className="font-semibold">
                            {item.card.info.name} - ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                        </div>
                        <div className="text-sm mt-1">{item.card.info.description}</div>
                    </div>
                    <div className="w-2/12">
                        <div className="relative">
                            <img src={CDN_URL + item.card.info.imageId} className="rounded-md object-cover h-[95px] w-full" />
                            <button onClick={() => handleAddItems(item)} className="bg-rose-600 hover:bg-rose-500 text-white absolute -bottom-[11%] left-1/2 -translate-x-1/2 px-4 py-1 text-nowrap text-sm rounded-md">
                                Add +
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;