import { WindowRender, NavBar } from '@/features/dashboard/components';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 650px;
  background-color: var(--gray-900);
  display: flex;
  border-radius: 10px;
`;

export type ChoosenPage =
  | 'news'
  | 'routine'
  | 'exercises'
  | 'music'
  | 'chart'
  | 'settings';

export default function MainPage() {
  const [page, setPage] = React.useState<ChoosenPage>('news');
  return (
    <Container>
      <NavBar page={page} callback={setPage} />
      <WindowRender page={page} />
    </Container>
  );
}
