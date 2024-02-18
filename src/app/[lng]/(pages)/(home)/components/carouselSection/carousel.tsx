'use client'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import Image from 'next/image'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export function Carousel() {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper h-52 w-2/3 py-12"
    >
      <SwiperSlide className="h-full !w-[400px] rounded-md border-4 border-primary bg-cover bg-center">
        <Image
          src="/home/carousel-section/carousel-1.png"
          alt=""
          width={1140}
          height={817}
          className="h-full w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="h-full !w-[400px] rounded-md border-4 border-primary bg-cover bg-center">
        <Image
          src="/home/carousel-section/carousel-2.png"
          alt=""
          width={1919}
          height={945}
          className="h-full w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="h-full !w-[400px] rounded-md border-4 border-primary bg-cover bg-center">
        <Image
          src="/home/carousel-section/carousel-3.png"
          alt=""
          width={1021}
          height={770}
          className="h-full w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="h-full !w-[400px] rounded-md border-4 border-primary bg-cover bg-center">
        <Image
          src="/home/carousel-section/carousel-4.png"
          alt=""
          width={856}
          height={645}
          className="h-full w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="h-full !w-[400px] rounded-md border-4 border-primary bg-cover bg-center">
        <Image
          src="/home/carousel-section/carousel-5.png"
          alt=""
          width={1137}
          height={701}
          className="h-full w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="h-full !w-[400px] rounded-md border-4 border-primary bg-cover bg-center">
        <Image
          src="/home/carousel-section/carousel-6.png"
          alt=""
          width={1134}
          height={827}
          className="h-full w-full"
        />
      </SwiperSlide>
    </Swiper>
  )
}
