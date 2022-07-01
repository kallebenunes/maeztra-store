import { MouseEvent, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Container,ProductCard} from './style'
import { productList } from './productList';
import ColorSelector from '../ColorSelector';


import 'swiper/css/navigation';

const BestSellersShelf = () => {

    const [colorSelectedIndex, setColorSelectedIndex] = useState<number>() 

    function handleSelectColor(e: MouseEvent){
        console.log(e.currentTarget)
    }

    return (
        <Container>
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                breakpoints={{
                    1920: {
                        slidesPerView: 5
                    },
                    1440: {
                        slidesPerView: 3
                    },
                    720: {
                        slidesPerView: 2
                    }
                }}
                >
                <div className="container-start" slot="container-start">Mais Pedidos</div>
                {productList.map(product => {
                    return (
                        <SwiperSlide>
                            <ProductCard>
                                <div>
                                    <img src={product.urlImg} alt={product.productName} />
                                    <ColorSelector productColors={product.productColors} />
                                    
                                    <span>
                                        { new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(product.productPrice) }
                                    </span>
                                    <h1>{product.productName}</h1>
                                    <p>{product.productDescription}</p>
                                </div>
                                <button>Adicionar</button>
                            </ProductCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container>
    )
}
export default BestSellersShelf