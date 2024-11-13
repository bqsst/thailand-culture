const AppComment = (props) => {

    const { personSrc1, personSrc2, personSrc3,
        person1, person2, person3,
        personText1, personText2, personText3,
        imageReview11, imageReview12,
        imageReview21, imageReview22, imageReview23,
        imageReview31, imageReview32
    } = props;
    
    const personReveiewArr = [{
        personSrc: personSrc1, person: person1, text: personText1, images: [imageReview11, imageReview12]
    }, {
        personSrc: personSrc2, person: person2, text: personText2, images: [imageReview21, imageReview22, imageReview23]
    }, {
        personSrc: personSrc3, person: person3, text: personText3, images: [imageReview31, imageReview32]
    }];

    return (
        <div className="flex flex-col pt-[70px] h-auto pb-[50px]">
            <h1 className="text-[30px] font-medium px-4">Review</h1>
            {personReveiewArr.map((review, index) => (
                <div key={index} className="flex flex-col h-full space-y-6 pt-2 pr-4 sm:pr-0 sm:px-4">
                    <div className="flex items-center h-1/4 pt-4">
                        <div className="flex flex-row justify-between items-center border-t-2 w-full py-4">
                            <div className="flex flex-row space-x-4 items-center rounded-full">
                                <img src={review.personSrc} alt="profile" className="w-10 h-10 sm:w-12 sm:h-12" />
                                <span className="text-[18px]">{review.person}</span>
                            </div>
                            <div className="flex flex-row items-center space-x-4">
                                <div className="flex flex-row items-center space-x-[5px]">
                                    <img src="/images/like-icon.png" alt="like" className="w-6" />
                                    <span className="font-semibold">0</span>
                                </div>
                                <img src="/images/menu-icon.png" alt="menu" className="w-9" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-3/4">
                        <div className="flex flex-row items-center">
                            {Array(5).fill(0).map((_, i) => (
                                <img key={i} src="/images/heart-icon.png" alt="heart" className="object-cover w-5 h-5" />
                            ))}
                        </div>
                        <p className="mt-2">
                            {review.text}
                        </p>
                        <div className="flex flex-row space-x-2 sm:space-x-0 lg:grid sm:grid-cols-3 sm:gap-2 w-1/3 pt-4">
                            {review.images.map((img, i) => (
                                <img key={i} src={img} alt="review" className="object-cover rounded-lg" />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AppComment;