import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import {Container} from './style'
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Footeraccordion() {
    return (
        <Container>
            <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Informações
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <nav>
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
                    </AccordionItemPanel>
                </AccordionItem>
                
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Miha Conta
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <nav>
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
                    </AccordionItemPanel>
                </AccordionItem>
                
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Onde nos encontrar
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <nav>
                            <ul>
                                <li>
                                    <a href=""> Lojas </a>
                                </li>
                                <li>
                                    <a href=""> Endereço </a>
                                </li>
                            </ul>
                        </nav>         
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>
        </Container>
    );
}

