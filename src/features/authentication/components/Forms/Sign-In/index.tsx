/* eslint-disable react/no-unescaped-entities */
import { useLogInForm } from '@/features/authentication/hooks/useLogInForm';
import React from 'react';
import styled from 'styled-components';

import AuthInput from '../../input';
import { Anchor, LightText } from '../style';
import { Form } from './style';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: var(--purple-500);
  font-size: 14px;
  font-weight: 600;
  color: var(--white-900);
  :hover {
    background-color: var(--purple-100);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
function ButtonAndMore() {
  return (
    <Container>
      <Anchor>Forgot your password?</Anchor>
      <Button type="submit">Log In</Button>
      <TextWrapper>
        <LightText>Don't have an account?</LightText>
        <Anchor>Register</Anchor>
      </TextWrapper>
    </Container>
  );
}

export default function SignInForm() {
  const { status, values, handleChange, handleSubmit } = useLogInForm();
  return (
    <Form>
      <AuthInput
        text="Email"
        type="email"
        value={values.email}
        placeholder="johndoe@gmail.com"
        status={status}
        callback={handleChange('email')}
      />
      <AuthInput
        text="Password"
        type="password"
        value={values.password}
        placeholder="******"
        status={status}
        callback={handleChange('password')}
      />
      <ButtonAndMore />
    </Form>
  );
}
