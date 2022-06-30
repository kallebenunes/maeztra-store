import iconTruck from '../../assets/icon-truck.svg'
import iconWorld from '../../assets/icon-world.svg'
import iconLabel from '../../assets/icon-label.svg'
import iconDposit from '../../assets/icon-deposit.svg'
import iconChange from '../../assets/icon-change.svg'

interface SliderItem {
  urlImg: string
  title: string
  description: string
}

export const sliderItems: SliderItem[]  = [
  {
    urlImg: iconWorld,
    title: 'Produtos Importados',
    description: 'Produtos de Alta Qualidade'
  },
  {
    urlImg: iconDposit,
    title: 'Estoque no Brazil',
    description: 'Produtos mais pertos de você!'
  },
  {
    urlImg:  iconChange,
    title: 'Trocas Garantidas',
    description: 'Trocas em até 24 horas, veja as regras'
  },
  {
    urlImg: iconLabel,
    title: 'Ganhe 5% of f',
    description: 'Pagando à vista no Cartão'
  },
  {
    urlImg:  iconTruck ,
    title: 'Frete Gratis',
    description: 'Nas compras acima de R$ 499,00'
  },
]