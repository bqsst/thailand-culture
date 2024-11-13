const AppAbout = (props) => {

    const {locationSrc, location, email, phone, describe} = props;

    return (
        <div className="pt-16 md:pt-24 h-auto md:h-[438px] space-y-4 xl:mb-[200px]">
            <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold">About</h1>
            <div className="flex flex-col lg:flex-row lg:space-x-8 xl:space-x-0">
                <div className="w-full xl:w-2/3 pr-0 xl:pr-32">
                    <p className="text-[18px] sm:text-[20px] lg:text-[18px] xl:text-[20px] indent-8">
                        {describe}
                    </p>
                </div>
                <div className="flex flex-col bg-white shadow justify-center items-center rounded-2xl w-full lg:w-2/3 h-auto py-6 space-y-4 mt-6 lg:mt-0">
                    <div className="py-2 flex flex-col xl:w-full justify-center lg:justify-start items-center h-1/2 space-y-2">
                        <span className="text-[16px] sm:text-[20px] lg:text-[18px] xl:text-[20px] lg:w-full lg:pl-6">Location and contact</span>
                        <iframe
                            src={locationSrc}
                            className="w-full h-[150px] sm:h-[200px] px-4 sm:px-6"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        />
                    </div>
                    <div className="flex flex-col justify-center px-8 h-1/2 w-full space-y-4">
                        <div className="flex flex-row space-x-4">
                            <img src="/images/location-icon.png" alt="location" className="object-cover w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]" />
                            <span className="text-[16px] sm:text-[20px]">{location}</span>
                        </div>
                        <div className="flex flex-row space-x-4">
                            <img src="/images/email-icon.png" alt="email" className="object-cover w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]" />
                            <span className="text-[16px] sm:text-[20px]">{email}</span>
                        </div>
                        <div className="flex flex-row space-x-4">
                            <img src="/images/phone-icon.png" alt="location" className="object-cover w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]" />
                            <span className="text-[16px] sm:text-[20px]">{phone}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppAbout;