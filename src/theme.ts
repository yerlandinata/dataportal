import { blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        light: blue[300],
        main: blue[500],
        dark: blue[700],
      },
    },
    typography: {
      useNextVariants: true,
    },
    overrides: {
        MuiPaper: {
            root: {
                margin: '0.3em',
                width: '100%'
            }
        }
    }
  });