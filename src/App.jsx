import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './pages/ProductAll/ProductAll';
import ProductDetail from './pages/ProductDetail';
import SignIn from './pages/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
