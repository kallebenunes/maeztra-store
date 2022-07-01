import { useState } from 'react'
import Modal from 'react-modal'
import { Container } from './style'
import newsletterImg from '../../assets/newsletter-image.png'
import mailIcon from '../../assets/mail-icon.svg'
import sendIcon from '../../assets/send-icon.svg'

const NewsletterModal = () => {

    const [isOpen, setIsOpen] = useState(true)
    
    function onRequestClose(){
        setIsOpen(false)
    }

    return (
            <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose} 
            overlayClassName="newsletter-overlay"
            className="newsletter-content"
            >
                <Container>
                    <button onClick={onRequestClose} >Fechar</button>
                    <img src={newsletterImg} alt="" />
                    <div>
                        <img src={mailIcon} alt="" />
                        <h1>Bem-vindo a maeztra</h1>
                        
                        <p>Receba em primeira mão <br/> <b>desconto e ofertas exclusivas</b></p>

                        <div>
                            <input  placeholder='Digite seu email'/>
                            <button>
                                <span>Enviar</span>
                                <img src={sendIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </Container>
            </Modal>
    
    )
}
export default NewsletterModal