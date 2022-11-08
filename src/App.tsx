import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import RouterNavigator from './components/router';
import { OSHeaderUbuntu } from './features/os-header/components';
import GlobalStyles from './styles/globalStyle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <OSHeaderUbuntu />
        <BrowserRouter>
          <RouterNavigator />
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

export default App;
