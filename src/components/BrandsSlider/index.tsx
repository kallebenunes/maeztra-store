
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, SliderItem } from './style'
import { sliderItems } from './sliderItems';
const BrandsSlider = () => {
    return (
        <Container>
              <Swiper
                spaceBetween={16}
                slidesPerView={4}
                breakpoints={{
                    1440: {
                        slidesPerView: 5,
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