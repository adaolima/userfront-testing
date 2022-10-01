import React from 'react';
import Userfront from '@userfront/react';

Userfront.init("pn445q8n");

const LoginForm = Userfront.build({
  toolId: "rddkrr"
});


const Login: React.FC = () => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  )
}

export default Login;