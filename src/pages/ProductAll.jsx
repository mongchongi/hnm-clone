import { useEffect, useState } from 'react';

const ProductAll = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch('http://localhost:4000/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div>ProductAll</div>;
};

export default ProductAll;
