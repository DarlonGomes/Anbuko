import React from 'react';

import { AuthStep } from '../../Background';
import HeaderTitle from '../Header';
import SignInForm from '../Sign-In';
import SignUpForm from '../Sign-Up';
import { Container } from './style';

interface WrapperProps {
  method: 'log-in' | 'register';
  changeMethod: React.Dispatch<React.SetStateAction<AuthStep>>;
}

export type HeaderProps = Pick<WrapperProps, 'method'>;

export default function FormWrapper({ method, changeMethod }: WrapperProps) {
  return (
    <Container>
      <HeaderTitle method={method} />
      {method === 'log-in' && <SignInForm changeMethod={changeMethod} />}
      {method === 'register' && <SignUpForm changeMethod={changeMethod} />}
    </Container>
  );
}
