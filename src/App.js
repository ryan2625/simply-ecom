import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home-page/Home';
import Categories from './pages/categories-page/Categories';
import Product from './pages/product-page/Product';
import Navbar from './pages/other-components/Navbar';
import Footer from './pages/other-components/Footer';
import './App.css';

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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
