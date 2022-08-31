import './App.css';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Checkout from './pages/Checkout';
import Thanks from './pages/Thanks';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='register' element={ <Register/> }/>
        <Route path='login' element={ <Login/> }/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='product/:id' element={ <Product/>}/>
        <Route path='products/:category' element={<ProductList/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='thank-you' element={<Thanks/>}/>
      </Routes>
    </div>
  );
}

export default App;
