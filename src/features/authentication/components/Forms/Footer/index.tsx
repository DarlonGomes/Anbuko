/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { AuthStep } from '../../Background';
import FormButton from '../button';
import { Anchor, LightText } from '../style';
import { Container, TextWrapper } from './style';

interface Props {
  status: boolean;
  type: 'Log In' | 'Register';
  changeMethod: React.Dispatch<React.SetStateAction<AuthStep>>;
}
export default function Footer({ status, type, changeMethod }: Props) {
  return (
    <Container>
      {type === 'Log In' && (
        <>
          <Anchor>Forgot your password?</Anchor>
          <FormButton status={status} message="Log In" />
          <TextWrapper>
            <LightText>
              Don't have an account?
              <Anchor onClick={() => changeMethod('register')}>
                {' '}
                Register
              </Anchor>
            </LightText>
          </TextWrapper>
        </>
      )}
      {type === 'Register' && (
        <>
          <FormButton status={status} message="Register" />
          <TextWrapper>
            <LightText>
              By registering, you agree to THIS APP's
              <Anchor> Terms of Service</Anchor> and
              <Anchor> Privacy Policy</Anchor>
            </LightText>
          </TextWrapper>
          <Anchor onClick={() => changeMethod('log-in')}>
            Already have an account?
          </Anchor>
        </>
      )}
    </Container>
  );
}
