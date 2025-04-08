import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleMoveDetailPage = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className='product' onClick={handleMoveDetailPage}>
      <img src={product.img} alt={product.title} draggable='false' className='product__image' />
      <div className='product__choice'>{product.choice && 'Conscious choice'}</div>
      <div>{product.title}</div>
      <div>￦{product.price}</div>
      <div className='product__new'>{product.new && '신제품'}</div>
    </div>
  );
};

export default ProductCard;
