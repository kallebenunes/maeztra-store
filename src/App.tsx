import Header from './components/Header';
import MainSlider from './components/MainSlider';
import { GlobalStyle } from './globalStyle';

function App() {

  return (
    <div className="App">
        <GlobalStyle/>
        <Header/>
        <MainSlider/>
    </div>
  );
}

export default App;
