import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const navigate = useNavigate();

  const loginAndReload = async() =>  {
    loginWithRedirect();

    console.log('HEY!!')
    
    await navigate(`/dashboard`, { replace: true });
    
  }
    return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginAndReload()}
    >
      Log In
    </button>
  );
};

export default LoginButton;