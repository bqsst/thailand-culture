const AppReview = (props) => {

    const {star, poppular1, poppular2, poppular3, poppular4, poppular5, poppular6, poppular7} = props;

    const popularArr = [poppular1, poppular2, poppular3, poppular4, poppular5, poppular6, poppular7];
    const reviewStatusArr = [
        { label: "Excellent", value: 60, count: 54 },
        { label: "Very good", value: 75, count: 110 },
        { label: "Average", value: 25, count: 35 },
        { label: "Poor", value: 10, count: 26 },
        { label: "Terrible", value: 5, count: 7 },
    ];

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center pt-[100px] h-auto space-y-6 md:space-y-0 lg:space-x-14">
            <div className="flex flex-col w-full lg:w-1/2">
                <div className="flex flex-row space-x-4">
                    <div className="flex items-center">
                        <h4 className="text-[20px] font-semibold">{star}</h4>
                    </div>
                    <div className="flex flex-row h-[50px] items-center space-x-1">
                        {Array(5).fill(0).map((_, index) => (
                            <img key={index} src="/images/heart-icon.png" alt="heart" className="object-cover w-5 h-5" />
                        ))}
                        <p className="text-[16px] text-black text-opacity-50 ml-2">200 reviews</p>
                    </div>
                </div>
                <div className="flex items-start h-auto pt-4">
                    <div className="w-full space-y-6">
                        {reviewStatusArr.map((rating, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <span className="text-[17px] w-[100px]">{rating.label}</span>
                                <div className="flex-grow bg-gray-300 rounded-full h-5">
                                    <div className="bg-orange-500 h-5 rounded-full" style={{ width: `${rating.value}%` }}></div>
                                </div>
                                <span className="w-2">{rating.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full md:pt-8 lg:pt-0 lg:w-1/2 space-y-4">
                <div className="relative flex flex-row space-x-2">
                    <img src="/images/search-icon.png" className="absolute left-6 top-[25px] -translate-y-1/2 w-5 h-5" />
                    <input type="text" className="bg-zinc-50 w-full h-[50px] pl-12 border-2 rounded-full focus:outline-none" placeholder="Search reviews" />
                </div>
                <div className="flex flex-col h-full px-4 space-y-4">
                    <span className="text-[18px] font-medium">Popular mentions</span>
                    <div className="flex flex-wrap gap-4">
                        {popularArr.map((pop, index) => (
                            <button key={index} className="bg-zinc-50 px-4 py-[10px] rounded-full border-2 whitespace-nowrap hover:bg-gray-100">
                                {pop}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppReview;