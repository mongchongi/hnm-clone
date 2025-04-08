import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import './SignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const SignIn = () => {
  const [passwordCheck, setPasswordCheck] = useState(false);

  return (
    <div>
      <form className='sign-in'>
        <div className='sign-in__header'>
          <h2>로그인</h2>
          <p className='sign-in__message'>다양한 할인 혜택과 이벤트, 보너스 쿠폰을 놓치지 마세요</p>
        </div>
        <div className='sign-in__field'>
          <label className='sign-in__label'>이메일</label>
          <input type='email' className='sign-in__input' />
        </div>
        <div className='sign-in__field'>
          <label className='sign-in__label'>비밀번호</label>
          <div className='sign-in__password'>
            <FontAwesomeIcon
              icon={passwordCheck ? faEye : faEyeSlash}
              className='sign-in__password-icon'
              onClick={() => setPasswordCheck((prev) => !prev)}
            />
            <input type={passwordCheck ? 'text' : 'password'} className='sign-in__input sign-in__input--password' />
          </div>
        </div>
        <button type='submit' className='sign-in__button'>
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignIn;
