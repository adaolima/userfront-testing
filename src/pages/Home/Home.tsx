import React from 'react';
import Userfront from '@userfront/react';

Userfront.init("pn445q8n");

const SignupForm = Userfront.build({
  toolId: "lrrnao"
});

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <SignupForm />
    </>
  )
}

export default Home;