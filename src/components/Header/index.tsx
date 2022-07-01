import { Container, SearchBar, TopBar, MainHeader, CategoryMenu, MainHeaderMobile  } from './style'
import logoImg from '../../assets/logo.svg'
import iconPerson from '../../assets/icon-person.svg'
import iconHeart from '../../assets/icon-heart.svg'
import iconBag from '../../assets/icon-bag.svg'
import toggleIcon from '../../assets/toggle-icon.svg'
import searchIcon from '../../assets/search-icon.svg'
const categoryList: string[] = ['Novidades', 'Vestidos', "Roupas", 'Sapatos', 'Lingerie', 'Acessórios', 'OUTLET']

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

           <MainHeaderMobile>
            <div>
                
                <button>
                    <img src={toggleIcon} alt="" />
                </button>

                <a href='/'>
                    <img src={logoImg} alt="" />
                </a>
                
            </div>

            <div>
                <button>
                    <img src={iconBag} alt="" />
                </button>

                <button>
                    <img src={searchIcon} alt="" />
                </button>
            </div>

           </MainHeaderMobile>

            <CategoryMenu>
                <ul>
                    {categoryList.map(cateogry => {
                        return (
                            <li key={cateogry}>
                                <a href="/">{cateogry}</a>
                            </li>
                        )
                    })}
                </ul>
            </CategoryMenu>

        </Container>
    )
}
export default Header