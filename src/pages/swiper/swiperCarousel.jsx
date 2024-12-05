import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

const SwiperCarousel = () => { 
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/10912432/pexels-photo-10912432.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/10912432/pexels-photo-10912432.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/15274131/pexels-photo-15274131.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/19920354/pexels-photo-19920354.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/19920387/pexels-photo-19920387.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/19920387/pexels-photo-19920387.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/19920387/pexels-photo-19920387.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/19920357/pexels-photo-19920357.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}


export default SwiperCarousel