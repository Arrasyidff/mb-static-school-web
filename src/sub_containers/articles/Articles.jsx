import React, { useEffect } from 'react'
import './articles.scss'
import { Article } from '../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import { useSelector, useDispatch } from 'react-redux'
import { setArticles } from '../../store/actions/article'

function Articles() {
  const article = useSelector((state) => state.article)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setArticles())
  }, [dispatch])

  return (
    <div className="mb__sub-articles section__padding">
      <h1 className="mb__sub-articles--title section__title">Berita & Artikel</h1>
      <Swiper
        centeredSlides={false}
        spaceBetween={0}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          280: {
            width: 280,
            slidesPerView: 1
          },
          768: {
            width: 768,
            slidesPerView: 3
          }
        }}
      >
        {
          article.articles.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <Article />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Articles