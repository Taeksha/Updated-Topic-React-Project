import 'swiper/css';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Home.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

const Home = () => {
  return (
    <>
    

     <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper">
        <SwiperSlide><img src='https://www.westside.com/cdn/shop/files/C1_02_1920X900_SHOP_DRESSES_3_9af47f20-947b-4648-b598-dbadba666a1b.jpg?v=1736515647'/></SwiperSlide>
        <SwiperSlide><img src='https://www.westside.com/cdn/shop/files/C2_01_1920X900_SHOP_MENSWEAR_62c944b5-abb7-4c24-bc18-56c12a192a26.jpg?v=1736360259'/></SwiperSlide>
        <SwiperSlide><img src='https://www.westside.com/cdn/shop/files/C3_01_1920X900_ETHNIC_BOTTOMS.jpg?v=1736502927'/></SwiperSlide>
        <SwiperSlide><img src='https://www.westside.com/cdn/shop/files/C3_01_1920X900_SHOP_TEENS.jpg?v=1736504388'/></SwiperSlide>
        <SwiperSlide><img src='https://www.westside.com/cdn/shop/files/C2_06_1920X900_SHOP_LIVING_1.jpg?v=1736507473'/></SwiperSlide>
       
      </Swiper>
      {/* <div className='swiper'><img src='https://www.westside.com/cdn/shop/files/C2_01_1920X900_SHOP_MENSWEAR_62c944b5-abb7-4c24-bc18-56c12a192a26.jpg?v=1736360259'></img></div>
      <div className='swiper'><img src='https://www.westside.com/cdn/shop/files/C3_01_1920X900_ETHNIC_BOTTOMS.jpg?v=1736502927'></img></div>
      <div className='swiper'><img src='https://www.westside.com/cdn/shop/files/C3_01_1920X900_SHOP_TEENS.jpg?v=1736504388'></img></div>
      <div className='swiper'><img src='https://www.westside.com/cdn/shop/files/C2_06_1920X900_SHOP_LIVING_1.jpg?v=1736507473'></img></div> */}
    
    </>

    
  );
};

export default Home;