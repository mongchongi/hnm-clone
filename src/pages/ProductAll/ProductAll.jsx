import { useEffect, useState } from 'react';
import './ProductAll.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSearchParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const ProductAll = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    const searchQuery = query.get('q') || '';
    setIsLoading(true);

    try {
      const res = await fetch(`https://my-json-server.typicode.com/mongchongi/hnm-clone/products?q=${searchQuery}`);
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
      {isLoading && <Loading isLoading={isLoading} />}
      {error ? (
        <Error />
      ) : (
        <div className='product-list'>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductAll;
