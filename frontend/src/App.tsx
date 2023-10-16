import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import * as Sentry from '@sentry/react';
import '@mui/styles';

import RootStore from './config/store';
import client from './config/apolloClient';
import theme from './config/theme';
import './config/sentry';
import './config/i18n';

import RootNavigation from './navigation/RootNavigation';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const App: FunctionComponent = () => (
  <Provider store={RootStore}>
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
            <RootNavigation />
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  </Provider>
);

export default Sentry.withProfiler(App);
