import '../../App.css';

const AppHomeHead = () => {
    return (
        <div className="bg-custom flex justify-center items-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[660px] px-4 sm:px-10 md:px-20 lg:px-[150px]">
            <div className='flex flex-col justify-center items-center h-auto w-full space-y-4'>
                <h1 className='text-[32px] sm:text-[40px] md:text-[48px] lg:text-[65px] text-white font-semibold text-center leading-tight'>
                    Cultural attractions in <br /> Thailand
                </h1>
                <p className='text-[16px] sm:text-[18px] md:text-[19px] text-white text-center'>
                    Immerse yourself in the vibrant culture and stunning <br className="hidden sm:block" /> landscapes of Thailand, where every experience is a treasure to cherish
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-4 pt-4 space-y-4 sm:space-y-0">
                    <div className="relative flex flex-row space-x-2 w-full sm:w-auto">
                        <img src="/images/search-icon.png" className="absolute left-[24px] top-1/2 transform -translate-y-1/2 w-6 h-6" />
                        <input type="text" className="bg-zinc-50 w-full sm:w-[300px] md:w-[460px] h-[50px] pl-12 pr-4 border-2 rounded-[18px] focus:outline-none" placeholder="Search tourist attraction" />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default AppHomeHead;