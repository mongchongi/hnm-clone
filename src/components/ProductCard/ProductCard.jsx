import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className='product'>
      <img src={product.img} alt={product.title} draggable='false' className='product__image' />
      <div className='product__choice'>{product.choice && 'Conscious choice'}</div>
      <div>{product.title}</div>
      <div>￦{product.price}</div>
      <div className='product__new'>{product.new && '신제품'}</div>
    </div>
  );
};

export default ProductCard;
