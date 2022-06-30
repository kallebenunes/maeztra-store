import logoMelissa from '../../assets/logo-melissa.png'
import logoComma from '../../assets/logo-comma.png'
import logoForever21 from '../../assets/logo-forever21.png'
import logoZara from '../../assets/logo-zara.png'
import logoAnnTaylor from '../../assets/logo-anntaylor.png'

interface SliderItem {
  alt: string
  urlImg: string
}

export const sliderItems: SliderItem[]  = [
  {
    alt: "Logo Melissa",
    urlImg: logoMelissa
  },
  {
    alt: "Logo Comma",
    urlImg: logoComma
  },
  {
    alt: "Logo Zara",
    urlImg: logoZara
  },
  {
    alt: "Logo Forever 21",
    urlImg: logoForever21
  },
  {
    alt: "Logo Ann taylor",
    urlImg: logoAnnTaylor
  },
]