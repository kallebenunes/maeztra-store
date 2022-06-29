
import {Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container } from './style';
import { slideItems } from './slideItems';
import { SlideItem } from './style';


const MainSlider = () => {

    return (
    <Container>
    <Swiper
      modules={[Navigation,Pagination]}
      navigation
      pagination
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        
          {slideItems.map(item => {
            return (
              <SwiperSlide key={item.title}>
                <SlideItem>
                  <img src={item.urlImage} alt={item.title} />
                  <div>
                    <h1>{item.title}</h1>
                    <p> {item.description} </p>
                    <a href={item.callToAction.url}>{item.callToAction.text}</a>
                      
                  
                  </div>
              </SlideItem>
            </SwiperSlide>
            )
          })}
      </Swiper>
    </Container>
    )
}
export default MainSlider