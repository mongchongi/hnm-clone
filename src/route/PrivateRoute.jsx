import { Navigate } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

const PrivateRoute = ({ authenticate }) => {
  return authenticate ? <ProductDetail /> : <Navigate to={'/sign-in'} />;
};

export default PrivateRoute;
