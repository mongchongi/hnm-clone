import { useEffect, useState } from 'react';
import './ProductAll.css';
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductAll = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:4000/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className='product-list'>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductAll;
