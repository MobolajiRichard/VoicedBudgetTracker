import './App.css';
import Header from './Header/Header';
import Announcement from './Header/Announcement';
import Slider from './Header/Slider';
import Categories from './Header/Categories';
import Products from './Header/Products';
import Newsletter from './Header/Newsletter';
import Footer from './Header/Footer';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div className="app">
      <Announcement/>
      <Header/>
      <Slider/>
      <h3>Categories</h3>
      <Categories/>
      <h3>Popular Products</h3>
      <Products/>
      <Newsletter/>
      <Footer/>
      {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <ProductList/> */}
      {/* <Cart/> */}
    </div>
  );
}

export default App;
