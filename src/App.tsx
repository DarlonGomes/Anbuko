import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouterNavigator from './components/router';
import { OSHeaderUbuntu } from './features/os-header/components';
import GlobalStyles from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyles />
      <OSHeaderUbuntu />
      <BrowserRouter>
        <RouterNavigator />
      </BrowserRouter>
    </>
  );
}

export default App;
