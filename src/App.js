import './App.css';
import { lazy, Suspense } from 'react';
import {Routes, Route} from 'react-router-dom'
import { Fallback } from './Header/Spinner';

const HomePage = lazy (()=> import('./pages/HomePage'))
const Login = lazy (()=> import('./pages/Login'))
const Register = lazy (()=> import('./pages/Register'))
const Product = lazy (()=> import('./pages/Product'))
const ProductList = lazy (()=> import('./pages/ProductList'))
const Checkout = lazy (()=> import('./pages/Checkout'))
const Cart = lazy (()=> import('./pages/Cart'))
const Thanks = lazy (()=> import('./pages/Thanks'))



function App() {
  return (
    <div className="app">
      <Suspense fallback={<Fallback/>}>
        
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
          </Suspense>
    </div>
  );
}

export default App;
