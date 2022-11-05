import { AuthenticationPage, MainPage } from '@/pages';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// import useLocalStorage from '@/hooks/useToken';

const Container = styled.div`
  margin-top: 25px;
`;

// function ProtectedRouter() {
//   const [token] = useLocalStorage('user_data', '');
// }

export default function RouterNavigator() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/app" element={<MainPage />} />
      </Routes>
    </Container>
  );
}
