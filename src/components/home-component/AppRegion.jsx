import Slider from "react-slick";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const AppRegion = () => {

    const [region, setRegion] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        loadDatas()
    }, [])

    const loadDatas = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/region')
            setRegion(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const NextArrow = (props) => {
        const { onClick } = props;
        return currentSlide < region.length - 4 ? (
            <div className="custom-arrow next-arrow-1" onClick={onClick}>
                <img src="/images/arrow-r-icon.png" alt="Arrow right" className="w-8 h-8" />
            </div>
        ) : null
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return currentSlide > 0 ? (
            <div className="custom-arrow prev-arrow-1" onClick={onClick}>
                <img src="/images/arrow-l-icon.png" alt="Arrow left" className="w-8 h-8" />
            </div>
        ) : null
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    return (
        <div className="flex flex-col justify-center items-center h-auto sm:h-[660px] pt-8 space-y-4 px-4 sm:px-10 lg:px-40">
            <div className='flex flex-col justify-center items-center w-full h-auto sm:h-1/4 text-center'>
                <h1 className='text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] font-semibold'>
                    As follows
                </h1>
                <p className='text-[16px] sm:text-[18px] md:text-[19px] text-neutral-400'>
                    Indulge in the tranquil serenity of Thailand's pristine beaches, where the gentle waves and <br className="hidden sm:block" />
                    golden sands invite you to unwind and rejuvenate
                </p>
            </div>
            <div className='flex justify-center items-center w-full h-[auto] sm:h-3/4 px-4 sm:px-[60px] lg:px-[60px]'>
                <Slider {...settings} className="w-full">
                    {region.map((datas, index) => (
                        <NavLink to={`region/${index}`} key={index} className="flex flex-col space-y-2 hover:bg-zinc-100 rounded-xl py-2">
                            <div className="flex justify-center w-full h-48 sm:h-56 md:h-64 overflow-hidden px-2 md:px-4">
                                <img src={datas.image} alt={`Similar experience ${index + 1}`} className="object-contain w-full h-full rounded-lg" />
                            </div>
                            <div className="text-center px-4">
                                <h4 className="hidden sm:block text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                                    {datas.name}
                                </h4>
                                <p className="text-[14px] text-zinc-500">
                                    {datas.describe}
                                </p>
                            </div>
                        </NavLink>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default AppRegion;
