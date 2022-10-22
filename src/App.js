
import './App.css';
import Header from './Component/Header/Header';
import ProductContainer from './Component/ProductContainer/ProductContainer'
// import Search from './Component/Search/Search'

function App() {

  return (
    <div className="App">
      <Header></Header>
      {/* <Search></Search> */}
      <ProductContainer></ProductContainer>

    </div>
  );
}

export default App;
