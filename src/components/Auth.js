import React, { useContext } from 'react';
import {AuthContext} from '../components/Context/auth-context';
import './Auth.css';

const Auth = ()=> {
const authContext = useContext(AuthContext);

const loginHandlar = () => {
  authContext.login();
}
  return(
    <div className="Auth">
      <p className="Auth__para">You are not authenticated!</p>
      <p>Please log in to continue.</p>
      <button 
        className="loginButton"
        onClick={loginHandlar}>
        login
      </button>
    </div>
    
  )
}

export default Auth;