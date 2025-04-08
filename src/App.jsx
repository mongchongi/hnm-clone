import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './pages/ProductAll/ProductAll';
import SignIn from './pages/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

const App = () => {
  const [authenticate, setAuthenticate] = useState(false); // true => 로그인 O, false => 로그인 X

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll authenticate={authenticate} />} />
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
        <Route path='/sign-in' element={<SignIn setAuthenticate={setAuthenticate} />} />
      </Routes>
    </div>
  );
};

export default App;
