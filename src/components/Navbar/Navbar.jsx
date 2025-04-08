import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link } from 'react-router-dom';
import hnmLogo from '../../assets/hnm-logo.png';

const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

  return (
    <div className='nav'>
      <Link to={'/sign-in'} className='nav__sign-in'>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </Link>
      <div className='nav__logo'>
        <Link to={'/'}>
          <img src={hnmLogo} alt='H&M' className='nav__logo-image' />
        </Link>
      </div>
      <div className='nav__controls'>
        <ul className='nav__menu-list'>
          {menuList.map((item) => (
            <li key={item} className='nav__menu-item'>
              {item}
            </li>
          ))}
        </ul>
        <div className='nav__search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type='text' placeholder='제품 검색' className='nav__search-input' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
