import React from 'react';

import lofi from '../../../../assets/images/lofi-girl.gif';
import FormWrapper from '../Forms/Wrapper';
import { Container, Background, Blur } from './style';

export type AuthStep = 'log-in' | 'register';
export default function AuthenticationWrapper() {
  const [authStep, setStep] = React.useState<AuthStep>('log-in');
  return (
    <Container>
      <Background src={lofi} alt="backsplash" />
      <Blur />
      <FormWrapper method={authStep} changeMethod={setStep} />
    </Container>
  );
}
