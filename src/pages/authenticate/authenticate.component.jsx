import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './authenticate.styles.scss';

const Authenticate = () => (
  <div className='authenticate'>
    <SignIn />
    <SignUp />
  </div>
);

export default Authenticate;
