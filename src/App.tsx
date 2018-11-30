import * as React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import { SearchPage } from 'src/SearchPage/pages/SearchPage';
import { theme } from './theme';

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <header className="App-header">
          Data Portal
        </header>
        <Grid container={true} style={{ overflowX: "hidden", overflowY: "hidden" }} ><SearchPage /></Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
