import { Routes, Route } from 'react-router-dom'
import './grid.css';
import './App.css';
import Login from './sign_in/Login'
import Register from './sign_up/Register';
import ConfirmRegister from './sign_up/ConfirmRegister';
import AdminPage from './home_page/AdminPage';
import HomePage from './home_page/HomePage'
import { Fragment } from 'react';
import ShoppingPage from './home_page/ShoppingPage';
import TeddyShoppingPage from './home_page/TeddyShoppingPage';
import Detail from './home_page/Detail';
import Cart from './delivery/Cart';
import DeliveryDetail from './delivery/DeliveryDetail';
import GiftboxShoppingPage from './home_page/GiftboxShoppingPage';
import LoveShoppingPage from './home_page/LoveShoppingpage';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/confirm' element={<ConfirmRegister />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/shopping' element={<ShoppingPage />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/delivery' element={<DeliveryDetail />} />
        <Route path='/teddy' element={<TeddyShoppingPage />} />
        <Route path='/giftbox' element={<GiftboxShoppingPage />} />
        <Route path='/love' element={<LoveShoppingPage />} />
        
      </Routes>
    </Fragment>
  );
}

export default App;
