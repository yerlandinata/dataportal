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
      subtitle1: {
        color: "rgba(0, 0, 0, 0.87)",
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: "1.125rem",
        lineHeight: 1.75,
        letterSpacing: "0.00938em",
      }
    },
    overrides: {
        MuiList: {
          root: {
            width: '100%'
          }
        },
        MuiPaper: {
          root: {
              margin: '0.3em',
              width: '100%'
          }
        },
        MuiSvgIcon: {
            fontSizeLarge: {
              fontSize: '60px'
            }
        },
        MuiListItem: {
          root: {
            width: '100%',
            display: 'flex',
            position: 'relative',
            boxSizing: 'border-box',
            textAlign: 'left',
            alignItems: 'center',
            paddingTop: '4px',
            paddingBottom: '4px',
            justifyContent: 'flex-start',
            textDecoration: 'none',
          }
        }
    }
  });
