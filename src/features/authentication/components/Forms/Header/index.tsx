/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { HeaderProps } from '../Wrapper';
import { Header, Title, Subtitle } from './style';

export default function HeaderTitle({ method }: HeaderProps) {
  return (
    <Header>
      {method === 'log-in' && (
        <>
          <Title>Welcome back</Title>
          <Subtitle>We're so excited to see you!</Subtitle>
        </>
      )}
      {method === 'register' && <Title>Create an account</Title>}
    </Header>
  );
}
