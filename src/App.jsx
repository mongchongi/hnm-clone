import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './pages/ProductAll/ProductAll';
import SignIn from './pages/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  const [authenticate, setAuthenticate] = useState(false); // true => 로그인 O, false => 로그인 X
  const [showTop, setShowTop] = useState(false);

  const toggleTopButton = () => {
    if (window.scrollY > 100) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleTopButton);
  }, []);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
        <Route path='/sign-in' element={<SignIn setAuthenticate={setAuthenticate} />} />
      </Routes>
      {showTop && (
        <button className='top-button' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FontAwesomeIcon icon={faUpLong} className='top-button__icon' />
        </button>
      )}
    </div>
  );
};

export default App;
