// import css from LoginPage.module.css
import React from 'react';
import GoogleLoginButton from '../components/googleLoginButton';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return(
    <div className={css.background}>
      <p>vhv</p>
      <div className={css.sideShape}></div>
      <div className={css.loginBox}>
        <GoogleLoginButton></GoogleLoginButton>
      </div>
    </div>
  )
}

export default LoginPage;