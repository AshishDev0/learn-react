const ShimmerCard = () => {
    const noOfCards = new Array(20).fill(null);

    return (
        <div className="shimmer-container">
            {noOfCards.map((_, i) => (
                <div className="shimmer-card" key={i}>
                    <div className="shimmerCard-img"></div>
                    <div className="shimmerCard-body"></div>
                </div>
            ))}
        </div>
    )
}

export default ShimmerCard;