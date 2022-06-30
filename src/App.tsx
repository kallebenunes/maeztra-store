import BrandsSlider from './components/BrandsSlider';
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
    </div>
  );
}

export default App;
