import '../../App.css';

const AppHomeDes = () => {
    return (
        <div className="bg-green-300 bg-custom-2 flex flex-col justify-center items-center h-auto sm:h-[350px] pt-8 space-y-4 mt-16 px-4 sm:px-10">
            <h1 className='text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-semibold text-center'>
                Unwind in Tropical Oases
            </h1>
            <p className='text-[16px] sm:text-[18px] md:text-[19px] text-center text-stone-600'>
                Immerse yourself in the serene beauty of Thailand's lush, <br className="hidden sm:block"/> hidden oases,
                where every moment is an opportunity to <br className="hidden sm:block"/> reconnect with nature and find inner peace
            </p>
        </div>
    )
}

export default AppHomeDes;
