const AppImage = (props) => {

    const {image1, image2, image3} = props;

    return (
        <div className="flex justify-center items-center h-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto w-full">
                <div className="hidden md:flex sm:col-span-2">
                    <img src={image1} alt="Large Image" className="w-full h-full object-cover rounded-lg lg:rounded-none lg:rounded-l-2xl" />
                </div>
                <div className="grid grid-rows-3 md:grid-rows-2 gap-4">
                    <img src={image1} alt="Large Image" className="md:hidden w-full h-full object-cover rounded-lg" />
                    <img src={image2} alt="Small Image 1" className="w-full h-full object-cover rounded-lg lg:rounded-none lg:rounded-tr-2xl" />
                    <img src={image3} alt="Small Image 2" className="w-full h-full object-cover rounded-lg lg:rounded-none lg:rounded-br-2xl" />
                </div>
            </div>
        </div>
    )
}

export default AppImage;