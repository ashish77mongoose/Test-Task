import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Pagination,
  Navigation,

} from "swiper";
import { useState } from "react";
import { productYouMayLike } from "@utils/constants";
import { icons } from '@utils/icons';

const SwipperYouMayLike = () => {
  const [slide, setSlide] = useState(0);
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <div className="round-item">
          <img style={{ listStyle: "none" }} alt={`Slide ${i}`} />
        </div>
      </SwiperSlide>
    );
  }
  return (
    <div className="h-full  relative  px-6 flex justify-center">
   
   <div className="youmay-swiper-button-prev w-10 h-10 center cursor-pointer   rounded-full gradient-pink absolute top-1/2 -translate-y-1/2 z-[40] left-[-54px]">
   
   <div className=" absolute inset-[1.5px] center text-[20px] bg-white  rounded-full"> <span className="text-[20px] text-gradient-pink">{icons.bsprev}</span></div>
 </div>
 <div className="youmay-swiper-button-next w-10 h-10 cursor-pointer  rounded-full gradient-pink absolute top-1/2 -translate-y-1/2 z-[40] right-[-54px]">
  <div className=" absolute inset-[1.5px] center text-[20px] bg-white  rounded-full"> <span className="text-[20px] text-gradient-pink">{icons.bsnext}</span></div>
 </div>
  
  <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },

      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1700: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }}
    spaceBetween={16}
    loop={true}
    loopFillGroupWithBlank={true}
    grabCursor={false}
    navigation={{
      nextEl: ".youmay-swiper-button-next",
      prevEl: ".youmay-swiper-button-prev",
    }}
    modules={[Pagination, Navigation]}
    className=""
    onSlideChange={(swiper) => {
      setSlide(swiper.activeIndex);
    }}
  >
    {
      productYouMayLike.map((item,index)=>(

        <SwiperSlide>
          <div>
                <div className='relative bg-gray-2 p-[38px] h-[285px] w-full max-w-[285px] center rounded-[10px]'>
                  <img className=' max-w-[235px] max-h-[210px] mix-blend-darken' src={item.imgpath} alt="" />
                 
                </div>
                <div className='flex flex-col gap-2 pt-4'>
                  <span className='text-gray-text text-sm'>{item.productname}</span>
                  {item.rent&&  <span className='text-gray-text line-through text-sm'>{item.rent}</span>}
                  <span className={`font-bold ${item.rent ? `text-gradient-pink`:`text-gray-6 `}`}>{item.Emi}</span>
                 
                </div>

              </div>
        </SwiperSlide>
      ))
    }
    
   
  </Swiper>
</div>
  );
};

export default SwipperYouMayLike;
