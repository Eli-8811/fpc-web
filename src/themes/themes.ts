import { createTheme } from '@mui/material/styles';

export const themeLogin = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'gray',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#db0011',
    },
    secondary: {
      main: '#db0011',
    },
  },
});

export const themeMain = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
});