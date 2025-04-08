import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './pages/ProductAll/ProductAll';
import ProductDetail from './pages/ProductDetail';
import SignIn from './pages/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';

const App = () => {
  const [authenticate, setAuthenticate] = useState(false); // true => 로그인 O, false => 로그인 X

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/sign-in' element={<SignIn setAuthenticate={setAuthenticate} />} />
      </Routes>
    </div>
  );
};

export default App;
