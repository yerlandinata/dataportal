import * as React from 'react';

import { blue } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import { SearchPage } from 'src/SearchPage/pages/SearchPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
  },
});

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
