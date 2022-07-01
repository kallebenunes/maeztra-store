import React from 'react'
import Newsletter from '../Newsletter'
import { Container, FooterNav, AdditionalInformations } from './style'
import SocialNetworks from '../SocialNetworks'
import PaymentMethods from '../PaymentMethods'
import DevelopersInformation from '../DevelopersInformation'
import Footeraccordion from '../FooterAccordion'


const Footer = () => {
    return (
        <Container>
            
             <Newsletter/>
            <Footeraccordion/>
            <FooterNav>
                  <nav>
                    <h1>Informações</h1>
                    <ul>
                        <li>
                            <a href=""> Quem Somos </a>
                        </li>
                        <li>
                            <a href=""> Prazo de Envio </a>
                        </li>
                        <li>
                            <a href=""> Trocas e Devoluções </a>
                        </li>
                        <li>
                            <a href=""> Promoções e Cupons </a>
                        </li>
                    </ul>
                  </nav>
                  <nav>
                    <h1>Minha Conta</h1>
                    <ul>
                        <li>
                            <a href=""> Minha Conta </a>
                        </li>
                        <li>
                            <a href=""> Meus Pedidos </a>
                        </li>
                        <li>
                            <a href=""> Cadastre-se  </a>
                        </li>
                    </ul>
                  </nav>
                  <nav>
                    <h1>Onde nos Encontrar</h1>
                    <ul>
                        <li>
                            <a href=""> Lojas </a>
                        </li>
                        <li>
                            <a href=""> Endereço </a>
                        </li>
                    </ul>
                  </nav>           
            </FooterNav>

            <AdditionalInformations>
               
                <SocialNetworks/>
                
                <PaymentMethods/>
                   
                <DevelopersInformation/>
    
            </AdditionalInformations>
        </Container>
    )
}
export default Footer