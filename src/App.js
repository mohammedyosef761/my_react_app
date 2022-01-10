import './App.css';
import { Cart } from './component/Cart';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Reciption from './component/Reciption';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Reciption />
      <Products />
      <Cart />

    </div>
  );
}

export default App;
