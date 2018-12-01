import * as React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import { SearchPage } from 'src/SearchPage/pages/SearchPage';
import { AppHeader } from './components/AppHeader';
import { theme } from './theme';

export const App: React.SFC<{}> = () => (
  <MuiThemeProvider theme={theme}>
    <Grid container={true} style={{ overflowX: "hidden", overflowY: "hidden" }} >
      <Grid container={true}><AppHeader activeUser={{
        name: 'Yudhistira Erlandinata',
        role: 'Admin'
      }} /></Grid>
      <Grid container={true}><SearchPage /></Grid>
    </Grid>
  </MuiThemeProvider>
);
