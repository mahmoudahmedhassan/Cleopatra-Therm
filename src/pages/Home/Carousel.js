import React from 'react';
import slide_1 from "../../img/pexels-adrien-olichon-2464420.jpg";
import slide_2 from "../../img/pexels-brett-sayles-12778827.jpg";
import slide_3 from "../../img/pexels-just-a-couple-photos-3421636.jpg";
import slide_4 from "../../img/pexels-kateryna-babaieva-2760243.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';

export default function Carousel() {
    return (
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            spaceBetween={30}
            loop={true}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                <div>
                    <img src={slide_1} alt="logo" height="500px" width="100%" />
                    {/* <p> A pioneer and market leader in manufacturing watersupply and drainage solutions</p> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide_2} alt="logo" height="500px" width="100%" />
                {/* <p> A pioneer and market leader in manufacturing watersupply and drainage solutions</p> */}
             </SwiperSlide>
            <SwiperSlide>
                <img src={slide_3} alt="logo" height="500px" width="100%" />
                {/* <p> A pioneer and market leader in manufacturing watersupply and drainage solutions</p> */}
             </SwiperSlide>
            <SwiperSlide>
                <img src={slide_4} alt="logo" height="500px" width="100%" />
                {/* <p> A pioneer and market leader in manufacturing watersupply and drainage solutions</p> */}
             </SwiperSlide>
         </Swiper>
    )
}


