import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const ProductDetail = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSize, setShowSize] = useState(false);
  const [currentSize, setCurrentSize] = useState('사이즈 선택');

  const { id } = useParams();

  const getCurrentProduct = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`https://my-json-server.typicode.com/mongchongi/hnm-clone/products/${id}`);
      const data = await res.json();
      setCurrentProduct(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleSize = (event) => {
    setShowSize((prev) => !prev);

    if (event.target.className === 'detail__size-item') {
      setCurrentSize(event.target.innerHTML);
    }
  };

  useEffect(() => {
    getCurrentProduct();
  }, []);

  return (
    <div>
      {isLoading && <Loading isLoading={isLoading} />}
      {error ? (
        <Error />
      ) : (
        <div className='detail'>
          <img src={currentProduct?.img} alt={currentProduct?.title} draggable='false' className='detail__image' />
          <div className='detail__info'>
            <div className='detail__title'>{currentProduct?.title}</div>
            <div className='detail__price'>￦{currentProduct?.price}</div>
            <div className='detail__choice'>{currentProduct?.choice && 'Conscious choice'}</div>
            <div className='detail__new'>{currentProduct?.new && '신제품'}</div>
            <div className='detail__select' onClick={handleToggleSize}>
              <button className='detail__select-button'>
                <span>{currentSize}</span>
                <FontAwesomeIcon icon={showSize ? faCaretDown : faCaretRight} />
              </button>
              {showSize && (
                <ul className='detail__size-list'>
                  {currentProduct?.size.map((item) => (
                    <li key={item} className='detail__size-item'>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className='detail__add-button'>추가</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
