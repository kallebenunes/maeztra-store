import BestSellersShelf from './components/BestSellersShelf';
import BrandsSlider from './components/BrandsSlider';
import CollectionBanner from './components/CollectionBanner';
import Header from './components/Header';
import MainSlider from './components/MainSlider';
import ReasonsSlider from './components/ReasonsSlider';
import { GlobalStyle } from './globalStyle';

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
    </div>
  );
}

export default App;
