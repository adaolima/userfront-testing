import React from 'react';
import Userfront from '@userfront/react';

Userfront.init("pn445q8n");

const PasswordResetForm = Userfront.build({
  toolId: "nmmlna"
});


const PasswordReset: React.FC = () => {
  return (
    <>
      <h1>PasswordReset</h1>
      <PasswordResetForm />
    </>
  )
}

export default PasswordReset;