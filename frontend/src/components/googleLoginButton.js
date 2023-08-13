// setup the google login button
// import the google login button from react-google-login
// import the google login button css
// import the google login button icon
// setup the google login button component
// setup the google login button component css
// setup the google login button component icon
import { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import css from './googleLoginButton.module.css';
import axios from 'axios';
import { baseURL } from '../config';

const GoogleLoginButton = () => {
  const [user, setUser] = useState(null);

  const onLoginHandler = useGoogleLogin({
    onSuccess: (user) => setUser(user),
    onError: (error) => console.log(error),
  });

  useEffect(() => {
    if (user) {
      try{
        axios.post(baseURL+'auth/login', {
          token: user.access_token,
        }).then((res) => {
          console.log(res);
          
        }).catch((err) => {
          console.log(err);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [user]);

  return (
    <div className={css['google-login-button']} onClick = {onLoginHandler}>
      <p>Sign in with Google</p>
    </div>
  );
};

export default GoogleLoginButton;
