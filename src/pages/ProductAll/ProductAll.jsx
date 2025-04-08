import { useEffect, useState } from 'react';
import './ProductAll.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    const searchQuery = query.get('q') || '';
    setIsLoading(true);

    try {
      const res = await fetch(`http://localhost:4000/products?q=${searchQuery}`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

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
