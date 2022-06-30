import { Container } from './style'
import iconVisa from '../../assets/footer/icon-visa.svg'
import iconMastercard from '../../assets/footer/icon-mastercard.svg'

const PaymentMethods = () => {
    return (
        <Container>
            <ul>
                <li>
                   <img src={iconMastercard} alt="" />
                </li>
                <li>
                    <img src={iconVisa} alt="" />
                </li>
                <li>
                   <img src={iconMastercard} alt="" />
                </li>
                <li>
                    <img src={iconVisa} alt="" />
                </li>
            </ul>
        </Container>
    )
}
export default PaymentMethods