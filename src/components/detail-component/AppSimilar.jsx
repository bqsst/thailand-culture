const AppSimilar = (props) => {

    const {imageSimilar1,imageSimilar2, imageSimilar3, imageSimilar4, similar1, similar2, similar3, similar4} = props;

    const imagesSimilarArr = [imageSimilar1, imageSimilar2, imageSimilar3, imageSimilar4];
    const similarNameArr = [similar1, similar2, similar3, similar4]

    return (
        <div className="pt-[150px] md:pt-[620px] lg:pt-[400px] xl:pt-[250px] h-auto space-y-8">
            <h1 className="text-[28px] sm:text-[32px] md:text-[38px] text-center sm:text-left font-semibold">Similar experiences</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-4 xl:w-full">
                {imagesSimilarArr.map((image, index) => (
                    <div key={index} className="flex flex-col space-y-6">
                        <div className="flex justify-center w-full h-48 lg:h-64 overflow-hidded px-8 xl:px-0">
                            <img src={image} alt={`Similar experience ${index + 1}`} className="object-cover w-full h-full rounded-lg" />
                        </div>
                        <div className="xl:h-[80px]">
                            <h4 className="h-1/2 text-[18px] sm:text-[20px] text-center xl:text-left font-semibold">
                                {similarNameArr[index]}
                            </h4>
                            <div className="h-2/3 flex flex-col sm:flex-row sm:justify-center xl:justify-start items-center sm:items-end space-x-2 xl:space-x-0">
                                {Array(5).fill(0).map((_, i) => (
                                    <img key={i} src="/images/heart-icon.png" alt="heart" className="hidden xl:block object-cover w-5 h-5" />
                                ))}
                                <div className="xl:hidden flex flex-row">
                                    {Array(5).fill(0).map((_, i) => (
                                        <img key={i} src="/images/heart-icon.png" alt="heart" className="object-cover w-5 h-5" />
                                    ))}
                                </div>
                                <p className="text-black text-opacity-50 sm:pl-2 text-[14px] lg:text-[16px]">13,500 reviews</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppSimilar;