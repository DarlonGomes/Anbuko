import { WindowRender, NavBar } from '@/features/dashboard/components';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 650px;
  background-color: var(--gray-900);
  display: flex;
`;
export default function MainPage() {
  return (
    <Container>
      <NavBar />
      <WindowRender />
    </Container>
  );
}
