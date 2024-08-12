import ItemList from "./ItemList";

const RestaurantCategory = ({data, expand, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div className="bg-cyan-50 mb-4 pl-4 pr-3 shadow-md py-3">
            <div className="font-bold flex justify-between cursor-pointer" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>{expand ? "🔺" : "🔻"}</span>
            </div>
            {expand && <ItemList items={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategory;