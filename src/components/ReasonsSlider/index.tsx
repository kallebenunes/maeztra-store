
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, SliderItem } from './style'
import { sliderItems } from './sliderItems';
const ReasonsSlider = () => {
    return (
        <Container>
              <Swiper
                spaceBetween={16}
                slidesPerView={5}
                >
                <div className="container-start" slot="container-start">Por que comprar na Maeztra ? </div>
                {sliderItems.map(item => {
                    return (
                        <SwiperSlide>
                            <SliderItem>
                            <img src={item.urlImg} alt="" />
                            <span>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </span>
                            </SliderItem>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container>
    )
}
export default ReasonsSlider