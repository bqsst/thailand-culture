const AppAttracHead = (props) => {

    const {name, describe} = props;

    return (
        <div className="flex justify-center items-center h-[660px] px-[70px]">
            <div className='flex flex-row w-full h-[550px] space-x-10'>
                <div className='w-1/2 px-10'>
                    <img src="/images/attraction-1-pic.png" alt="Picture" className='object-cover w-full h-full' />
                </div>
                <div className='w-1/2 flex flex-col justify-center items-center px-10 space-y-4'>
                    <h1 className='text-[70px] font-semibold leading-tight text-left w-full'>{name}</h1>
                    <p className='text-neutral-400 text-[25px] mr-16'>
                        {describe}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AppAttracHead;