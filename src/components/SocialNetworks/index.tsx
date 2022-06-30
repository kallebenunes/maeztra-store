import {Container} from './style'

import iconFacebook from '../../assets/footer/icon-facebook.svg'
import iconInstagram from '../../assets/footer/icon-instagram.svg'
import iconLinkedin from '../../assets/footer/icon-linkedin.svg'
import iconYoutbe from '../../assets/footer/icon-youtube.svg'

const SocialNetworks = () => {
    return (
        <Container>
             <ul>
                <li>
                    <a href="">
                        <img src={iconFacebook} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={iconLinkedin} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={iconInstagram} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={iconYoutbe} alt="" />
                    </a>
                </li>
            </ul>
        </Container>
    )
}
export default SocialNetworks