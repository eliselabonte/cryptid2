// import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

export const Auth0Handler = ({ children }) => {

  const clientId = "QDRy3XVTNAqnWnXfwNKBpisT3C0VYLOs";
  const domain = "dev-wfgeclbx.us.auth0.com";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

