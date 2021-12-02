import React, { useEffect } from 'react';

import LoginButton from './login-button';
import LogoutButton from './logout-button';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    console.log(isAuthenticated)
  }, [isAuthenticated])


  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;