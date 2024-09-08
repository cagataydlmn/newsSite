import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'; // Fade efekti için stil
import _ from 'lodash';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { getNews } from "../firebase";

export default function Home() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getNews(setNewsList);
  }, []);

  const randomNewsList = _.sampleSize(newsList, 6);
  const randomUnderSwiperList = _.sampleSize(newsList, 6);

  return (
    <div className="home">
      <div className="home__top">
        {newsList.slice(0, 4).map((item) => (
          <Link to={`/${item.newsTitle}`} className="home__top__box" key={item.newsTitle}>
            <img alt={item.newsImage} src={item.newsImage} />
            <div className="home__top__box__title">{item.newsTitle}</div>
          </Link>
        ))}
      </div>

      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        effect="fade" 
      >
        {randomNewsList.map((item) => (
          <SwiperSlide key={item.newsTitle}>
            <Link to={`/${item.newsTitle}`}>
            <img src={item.newsImage} alt={item.newsTitle} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />

            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="underSwiper">
      {randomUnderSwiperList.map((item) => (
          <Link  to={`/${item.newsTitle}`} className="underSwiper__item" key={item.newsTitle}>
            <img src={item.newsImage} alt={item.newsTitle} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            <div className="underSwiper__item__text">{item.newsTitle}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
