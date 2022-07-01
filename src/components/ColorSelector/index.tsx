import React, { useState } from 'react'
import {Container, ColorBox} from './style'


interface ColorSelectorProps {
    productColors: string[]
}

const ColorSelector = ({productColors}:ColorSelectorProps) => {
    
    const [colorSelectedIndex, setColorSelectedIndex] = useState<number>() 
    
    return (
        <Container>
            {productColors.map((colorCode, index) => {
                return (
                    <ColorBox 
                    colorCode={colorCode} 
                    isActive={index === colorSelectedIndex }
                    onClick={(e) => {
                        setColorSelectedIndex(index)
                    }}
                    />
                )
            })}
        </Container>
    )
}
export default ColorSelector