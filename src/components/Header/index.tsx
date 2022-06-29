import { Container, SearchBar, TopBar, MainHeader, CategoryMenu  } from './style'
import logoImg from '../../assets/logo.svg'
import iconPerson from '../../assets/icon-person.svg'
import iconHeart from '../../assets/icon-heart.svg'
import iconBag from '../../assets/icon-bag.svg'


const Header = () => {
    return (
        <Container>
            <TopBar>Acompanhe as melhores promoções disponíveis aqui na Maestra. </TopBar>

            <MainHeader>

                <img src={logoImg} alt="" />

                <SearchBar>
                    <input type="text" placeholder='O que você busca ? ' />
                    <button 
                        type="submit"
                    >
                        Buscar
                    </button>
                </SearchBar>  

                <nav>
                    <ul>
                        <li>
                            <img src={iconPerson} alt="" />
                            <span>Minha conta</span>
                        </li>
                        <li>
                            <img src={iconHeart} alt="" />
                            <span>Minha Conta</span>
                        </li>
                        <li>
                            <img src={iconBag} alt="" />
                            <span>Meu carrinho</span>
                        </li>
                    </ul>
                </nav>

            </MainHeader>


            <CategoryMenu>

            </CategoryMenu>
        </Container>
    )
}
export default Header