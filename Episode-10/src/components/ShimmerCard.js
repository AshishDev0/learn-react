const ShimmerCard = () => {
    const noOfCards = new Array(20).fill(null);

    return (
        <div className="flex flex-wrap gap-x-9 gap-y-10 justify-start pb-11 mt-[108px]">
            {noOfCards.map((_, i) => (
                <div className="w-[250px] h-[320px] bg-cyan-50 p-3 rounded-md shadow-md" key={i}>
                    <div className="h-[150px] w-[100%] object-cover rounded-md mb-3"></div>
                    <div className="shimmerCard-body"></div>
                </div>
            ))}
        </div>
    )
}

export default ShimmerCard;