import mainSliderImage from '../../assets/main-slider-image.png'

interface CallToActionSlideItem {
  text: string,
  url: string
}

export interface mainSliderItem {
  title: string,
  description: string, 
  urlImage: string,
  callToAction: CallToActionSlideItem
}

export const slideItems: mainSliderItem[] = [
  {
    title: "Promoções de outono 1",
    description: "Confira os melhores looks para combinar com vocês nesse outono",
    urlImage: mainSliderImage,
    callToAction: {
      text: "Conferir",
      url: "https://www.maeztra.com/"
    }
  },
  {
    title: "Promoções de outono 2",
    description: "Confira os melhores looks para combinar com vocês nesse outono",
    urlImage: mainSliderImage,
    callToAction: {
      text: "Conferir",
      url: "https://www.maeztra.com/"
    }
  },
  {
    title: "Promoções de outono 3",
    description: "Confira os melhores looks para combinar com vocês nesse outono",
    urlImage: mainSliderImage,
    callToAction: {
      text: "Conferir",
      url: "https://www.maeztra.com/"
    }
  },
  {
    title: "Promoções de outono 4",
    description: "Confira os melhores looks para combinar com vocês nesse outono",
    urlImage: mainSliderImage,
    callToAction: {
      text: "Conferir",
      url: "https://www.maeztra.com/"
    }
  }
]