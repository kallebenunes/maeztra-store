import { Container } from './style'
import logoMaeztraWhite from '../../assets/footer/logo-maeztra-white.svg'
import logoVtex from '../../assets/footer/logo-vtex.svg'

const DevelopersInformation = () => {
    return (
        <Container>
            <div>
                <p>Powered by</p>
                <img src={logoVtex} alt="" />    
            </div>
            <div>
                <p>Developed  by</p>
                <img src={logoMaeztraWhite} alt="" />
            </div>
        </Container>
    )
}
export default DevelopersInformation