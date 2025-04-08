import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './pages/ProductAll';
import ProductDetail from './pages/ProductDetail';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
