import { Routes, Route } from 'react-router-dom'
import './grid.css';
import './App.css';
import Login from './sign_in/Login'
import Register from './sign_up/Register';
import ConfirmRegister from './sign_up/ConfirmRegister';
import AdminPage from './home_page/AdminPage';
import HomePage from './home_page/HomePage'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/confirm' element={<ConfirmRegister />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
