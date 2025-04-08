import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import hnmLogo from '../../assets/hnm-logo.png';
import { useEffect, useState } from 'react';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

  const handleMoveSignInPage = () => {
    authenticate ? setAuthenticate(false) : navigate('/sign-in');
  };

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleResize = () => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  };

  const handleSearch = (event) => {
    const keyword = event.target.value;

    if (event.key === 'Enter') {
      navigate(`/?q=${keyword}`);
    }
  };

  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {showMenu && (
        <div className='sidebar'>
          <div className='sidebar__menu'>
            <FontAwesomeIcon icon={faXmark} className='sidebar__menu-icon' onClick={handleToggleMenu} />
            <ul className='sidebar__menu-list'>
              {menuList.map((item) => (
                <li key={item} className='sidebar__menu-item'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className='nav'>
        <div className='nav__sign-in' onClick={handleMoveSignInPage}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? '로그아웃' : '로그인'}</div>
        </div>
        <div className='nav__logo'>
          <Link to={'/'}>
            <img src={hnmLogo} alt='H&M' draggable='false' className='nav__logo-image' />
          </Link>
        </div>
        <div className='nav__controls'>
          {isMobile ? (
            <FontAwesomeIcon icon={faBars} className='nav__menu-icon' onClick={handleToggleMenu} />
          ) : (
            <ul className='nav__menu-list'>
              {menuList.map((item) => (
                <li key={item} className='nav__menu-item'>
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className='nav__search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type='text' placeholder='제품 검색' className='nav__search-input' onKeyDown={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
