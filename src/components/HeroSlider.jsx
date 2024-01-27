import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
// import {EffectFade, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import Img1 from '../assets/img/heroSlider/1.jpg'
import Img2 from '../assets/img/heroSlider/2.jpg'
import Img3 from '../assets/img/heroSlider/3.jpg'


const slides = [
  {
    title: 'Your Luxury Hotel for Vacation',
    bg: Img1,
    btnText: 'See Our Rooms'
  },
  {
    title: 'Your Luxury Hotel for Vacation',
    bg: Img2,
    btnText: 'See Our Rooms'
  },
  {
    title: 'Your Luxury Hotel for Vacation',
    bg: Img3,
    btnText: 'See Our Rooms'
  },
]

const HeroSlider = () => {
  return (
    <Swiper
      //  modules = {[EffectFade, Autoplay]}
       effects = {'fade'}
       loop = {true}
       autoplay = {{
        delay:3000,
        disableOnInteraction: false
       }}
       className="heroSlide h-[600px] lg:h-[860px]">
      {
        slides.map((slide,index)=>{
          const {title,bg,btnText} = slide
          return (
          <SwiperSlide 
            className='h-full relative flex justify-center items-center'
            key={index}>
            <div className='z-20 text-white text-center'>
              <h4 className='uppercase font-tertiary tracking-[6px] mb-5'>Just Enjoy and relax</h4>
              <h1 className='uppercase text-[32px] font-primary tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>{title}</h1>
              <button className='btn btn-lg btn-primary mx-auto'>{btnText}</button>
            </div>
            <div className='absolute top-0 h-full w-full'>
              <img className='object-cover h-full w-full' src={bg} alt="" />
            </div>
            <div className='h-full w-full bg-black/70 absolute'></div>
          </SwiperSlide>)
        })
      }
    </Swiper>
  )
}

export default HeroSlider