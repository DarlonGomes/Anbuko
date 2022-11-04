import { AuthenticationPage } from '@/pages';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 25px;
`;

export default function RouterNavigator() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
      </Routes>
    </Container>
  );
}
