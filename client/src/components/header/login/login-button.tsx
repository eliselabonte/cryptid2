import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './authentication.scss';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

    return (
    <button
      className="log-btn"
      onClick={loginWithRedirect}
    >
      Log In
    </button>
  );
};

export default LoginButton;