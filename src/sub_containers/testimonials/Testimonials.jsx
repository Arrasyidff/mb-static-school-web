import React, { useEffect } from 'react'
import './testimonials.scss'

import { Testimoni } from '../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector, useDispatch } from 'react-redux'
import { setTestimonials } from '../../store/actions/testimonial'

function Testimonials() {
  const testimonial = useSelector(state => state.testimonial)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(setTestimonials())
  }, [dispatch])

  return (
    <div className="mb__testimonials section__padding">
        <h1 className="mb__testimonials--title section__title">Testimoni</h1>
        <Swiper
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={10}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
        >
            {
            testimonial.testimonials.map((el, i) => {
                return (
                <SwiperSlide key={i}>
                    <Testimoni />
                </SwiperSlide>
                )
            })
            }
        </Swiper>
    </div>
  )
}

export default Testimonials