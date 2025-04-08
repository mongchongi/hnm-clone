import { ClipLoader } from 'react-spinners';
import './Loading.css';

const Loading = ({ isLoading }) => {
  return (
    <div className='loading'>
      <ClipLoader color={'white'} loading={isLoading} size={100} aria-label='Loading Spinner' data-testid='loader' />
    </div>
  );
};

export default Loading;
