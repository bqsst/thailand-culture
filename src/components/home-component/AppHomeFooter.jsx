const AppHomeFooter = () => {

    const FooterText1 = ['Quick Links', 'Explore', 'Discover', 'Indulge', 'Experience'];
    const FooterText2 = ['Connect with Us', 'Facebook', 'Instagram', 'Twitter', 'LinkedIn'];
    const FooterText3 = ['Stay Informed', 'News', 'Events', 'Offers', 'Newsletter'];

    return (
        <div className="bg-white flex flex-col md:flex-row justify-center items-center h-auto md:h-[330px] space-y-8 md:space-y-0 py-8">
            <div className='flex flex-col justify-center items-center w-full md:w-1/4 h-full space-y-4 px-4'>
                <img src="/images/logo-icon.png" alt="Logo" className='w-[85px]' />
                <span className='text-neutral-500 text-center'>
                    © 2024 SANNONGVAN, Inc.
                    All rights reserved.
                </span>
            </div>
            <div className='flex flex-col justify-center items-center md:items-start w-full md:w-1/4 h-full space-y-2 md:pl-32'>
                {FooterText1.map((text, index) => (
                    <span key={index} className='text-neutral-500 text-[17px] text-center md:text-left font-semibold'>{text}</span>
                ))}
            </div>
            <div className='flex flex-col justify-center items-center md:items-start w-full md:w-1/4 h-full space-y-2 md:pl-32'>
                {FooterText2.map((text, index) => (
                    <span key={index} className='text-neutral-500 text-[17px] text-center md:text-left font-semibold'>{text}</span>
                ))}
            </div>
            <div className='flex flex-col justify-center items-center md:items-start w-full md:w-1/4 h-full space-y-2 md:pl-32'>
                {FooterText3.map((text, index) => (
                    <span key={index} className='text-neutral-500 text-[17px] text-center md:text-left font-semibold'>{text}</span>
                ))}
            </div>
        </div>
    )
}

export default AppHomeFooter;
