'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Banner = () => {

    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" /></SwiperSlide>
        </Swiper>
    )
}

export default Banner