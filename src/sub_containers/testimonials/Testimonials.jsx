import React from 'react'
import './testimonials.scss'

import { Testimoni } from '../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from 'react-redux'

function Testimonials() {
  const {testimonials } = useSelector(state => state.testimonial)

  return (
    <div className="mb__testimonials section__padding">
        <h1 className="mb__testimonials--title section__title">Testimoni</h1>
        <Swiper
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={0}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
            breakpoints={{
                280: {
                    slidesPerView: 1,
                    spaceBetween: 5
                },
                550: {
                    slidesPerView: 3,
                    spaceBetween: 5
                },
            }}
        >
            {
            testimonials.map((testimoni, i) => {
                return (
                <SwiperSlide key={i}>
                    <Testimoni
                        name={testimoni.fullName}
                        picture={testimoni.picture}
                        message={testimoni.message}
                    />
                </SwiperSlide>
                )
            })
            }
        </Swiper>
    </div>
  )
}

export default Testimonials