
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, SliderItem } from './style'
import { sliderItems } from './sliderItems';
const BrandsSlider = () => {
    return (
        <Container>
              <Swiper
                spaceBetween={16}
                slidesPerView={1.2}
                breakpoints={{
                    1920: {
                        slidesPerView: 5
                    },
                    1440: {
                        slidesPerView: 3
                    },
                    720: {
                        slidesPerView: 2.2
                    }
                }}
                >
                <div className="container-start" slot="container-start">Marcas parceiras</div>
                {sliderItems.map(item => {
                    return (
                        <SwiperSlide>
                            <SliderItem>
                                <img src={item.urlImg} alt={item.alt} />
                            </SliderItem>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container>
    )
}
export default BrandsSlider