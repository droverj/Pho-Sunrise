import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../../styles/LoginButtons.scss';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className='login-buttons' onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;