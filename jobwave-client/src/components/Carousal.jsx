
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

import carousalImg1 from '../assets/carousel1.jpg';
import carousalImg2 from '../assets/carousel2.jpg';
import carousalImg3 from '../assets/carousel3.jpg';


const Carousal = () => {
    return (
        <div className='container py-12 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <Slider
                     image={carousalImg1} 
                     text='Get Your Web Development Projects Done in minutes'                  
                    ></Slider>
                </SwiperSlide>

                <SwiperSlide>
                    <Slider
                     text='Get Your Graphics Design Projects Done in minutes'
                     image={carousalImg2}
                     ></Slider>
                </SwiperSlide>

                <SwiperSlide>
                    <Slider
                    text='Start Your Digital Marketing Campaigns up n running'
                     image={carousalImg2}></Slider>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Carousal;