const AppHomeShow = () => {
    return (
        <div className="flex justify-center items-center h-auto sm:h-[660px] py-10">
            <div className='flex flex-col sm:flex-row w-full h-auto sm:h-[550px]'>
                <div className='w-full sm:w-1/2 px-4 sm:px-10'>
                    <img src="/images/home-2-pic.png" alt="Picture" className='object-cover w-full h-full rounded-lg' />
                </div>
                <div className='w-full sm:w-1/2 flex flex-col justify-center items-center px-4 sm:px-10 space-y-4 mt-6 sm:mt-0'>
                    <h1 className='text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-semibold leading-tight text-center sm:text-left'>
                        Here are the tourist attractions in <br /> each region.
                    </h1>
                    <p className='text-neutral-400 text-[16px] sm:text-[18px] md:text-[19px] text-center sm:text-left'>
                        Discover the hidden gems of Thailand's mountainous
                        regions, where ancient temples and lush forests
                        beckon adventurous spirits
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AppHomeShow;
