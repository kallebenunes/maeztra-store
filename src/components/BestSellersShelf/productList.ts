import product1Img from '../../assets/product-1.png'
import product2Img from '../../assets/product-2.png'


interface SliderItem {
  urlImg: string,
  productName: string,
  productDescription: string,
  productColors: string[];
  productPrice: number
}

export const productList: SliderItem[]  = [
  {
    urlImg: product1Img,
    productName: "Faux Suede Mini Skirt",
    productDescription: "A Faux suede mini skirt featuring exposed button front closures and panel seam construction",
    productPrice: 500,
    productColors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]
  },
  {
    urlImg: product2Img,
    productName: "Ruched Rose Print Mini Skirt",
    productDescription: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.n",
    productPrice: 500,
    productColors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]
  },
  {
    urlImg: product2Img,
    productName: "Faux Suede Mini Skirt",
    productDescription: "A Faux suede mini skirt featuring exposed button front closures and panel seam construction",
    productPrice: 500,
    productColors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]
  },
  {
    urlImg: product1Img,
    productName: "Ruched Rose Print Mini Skirt",
    productDescription: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.n",
    productPrice: 500,
    productColors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]
  },
  {
    urlImg: product2Img,
    productName: "Faux Suede Mini Skirt",
    productDescription: "A Faux suede mini skirt featuring exposed button front closures and panel seam construction",
    productPrice: 500,
    productColors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]
  },
  {
    urlImg: product1Img,
    productName: "Ruched Rose Print Mini Skirt",
    productDescription: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.n",
    productPrice: 500,
    productColors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]
  }
]