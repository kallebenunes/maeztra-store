import BestSellersShelf from './components/BestSellersShelf';
import BrandsSlider from './components/BrandsSlider';
import CollectionBanner from './components/CollectionBanner';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSlider from './components/MainSlider';
import ReasonsSlider from './components/ReasonsSlider';
import { GlobalStyle } from './globalStyle';

import NewsletterModal from './components/NewsletterModal';

function App() {

  return (
    <div className="App">
        <GlobalStyle/>
        <Header/>
        <MainSlider/>
        <ReasonsSlider/>
        <BrandsSlider/>
        <BestSellersShelf/>
        <CollectionBanner/>
        <Footer/>
        <NewsletterModal/>
    </div>
  );
}

export default App;
