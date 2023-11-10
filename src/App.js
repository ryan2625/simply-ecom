import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home-page/Home';
import Categories from './pages/categories-page/Categories';
import Product from './pages/product-page/Product';
import Navbar from './pages/other-components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
