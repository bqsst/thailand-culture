const AppHomeMonk = () => {
    return (
        <div className="flex flex-col justify-center items-center h-auto sm:h-[660px] pt-8 space-y-8 px-4 sm:px-10 lg:px-40">
            <div className='flex flex-col justify-center items-center w-full h-auto sm:h-1/4 text-center'>
                <h1 className='text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] font-semibold'>
                    Unveil the Wonders of Thailand
                </h1>
                <p className='text-[16px] sm:text-[18px] md:text-[19px] text-neutral-400'>
                    Discover the captivating blend of natural beauty, rich cultural heritage, <br className="hidden sm:block" />
                    and warm hospitality that makes Thailand a true paradise on earth
                </p>
            </div>
            <div className='relative flex justify-start items-center w-full h-auto sm:h-3/4 px-4 sm:px-10 lg:px-[200px]'>
                <div className='w-full sm:w-1/2'>
                    <img src="/images/monk-pic.png" alt="Monk" className='object-cover w-full h-full rounded-lg' />
                </div>
                <div className='absolute top-1/2 right-4 md:right-[240px] transform -translate-y-1/2 bg-red-50 bg-opacity-60 flex flex-col justify-center items-start w-4/5 md:w-1/3 h-auto p-6 rounded-sm space-y-4'>
                    <h1 className='text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-semibold'>
                        Bask in Coastal Splendor
                    </h1>
                    <p className='text-stone-400'>
                        Escape to a world of tranquility and rejuvenation, where the gentle
                        rhythm of the waves and the breathtaking coastal landscapes
                        beckon you to unwind and savor the moment
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AppHomeMonk;
