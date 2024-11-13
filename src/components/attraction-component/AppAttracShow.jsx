import Slider from "react-slick";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AppAttarcShow = (props) => {

   const { name1, name2, name3, name4, name5,
      image1, image2, image3, image4, image5,
      describe1, describe2, describe3, describe4, describe5,
      basePath
   } = props;

   const [currentSlide, setCurrentSlide] = useState(0)

   const imageArr = [image1, image2, image3, image4, image5]
   const nameArr = [name1, name2, name3, name4, name5]
   const describeArr = [describe1, describe2, describe3, describe4, describe5]

   const NextArrow = (props) => {
      const { onClick } = props;
      return currentSlide < 1 ? (
         <div
            className="custom-arrow next-arrow-2"
            onClick={onClick}
         >
            <img src="/images/arrow-r-icon.png" alt="Arrow right" className="w-8 h-8" />
         </div>
      ) : null
   };

   const PrevArrow = (props) => {
      const { onClick } = props;
      return currentSlide > 0 ? (
         <div
            className="custom-arrow prev-arrow-2"
            onClick={onClick}
         >
            <img src="/images/arrow-l-icon.png" alt="Arrow left" className="w-8 h-8" />
         </div>
      ) : null
   };

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
   };

   return (
      <div className='bg-zinc-50 flex justify-center items-center w-full h-3/4 px-[180px]'>
         <Slider {...settings} className="w-full">
            {imageArr.map((datas, index) => (
               <NavLink to={`${basePath}/${index}`} key={index} className="flex flex-col space-y-2 hover:bg-zinc-100 rounded-xl py-2">
                  <div className="flex justify-center w-full h-48 sm:h-56 md:h-64 overflow-hidden px-2 md:px-4">
                     <img src={datas} alt={`Similar experience ${index + 1}`} className="object-cover w-full h-full rounded-lg" />
                  </div>
                  <div className="flex flex-col justify-between text-center px-4 h-[150px] space-y-2">
                     <h4 className="hidden sm:block text-[16px] sm:text-[18px] md:text-[20px] font-semibold h-1/3">
                        {nameArr[index]}
                     </h4>
                     <p className="text-[14px] text-zinc-500 h-2/3">
                        {describeArr[index]}
                     </p>
                  </div>
               </NavLink>
            ))}
         </Slider>
      </div>
   )
}

export default AppAttarcShow;