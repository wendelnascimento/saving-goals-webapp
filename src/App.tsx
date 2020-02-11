import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import BaseLayout from './layouts/BaseLayout';
import SavingPlanSimulation from './screens/SavingPlanSimulation/SavingPlanSimulation';

import THEME from './util/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
  }
`;

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={THEME}>
        <BaseLayout>
          <SavingPlanSimulation />
        </BaseLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
