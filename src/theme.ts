import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    hover: string;
    contrastText: string;
  }
  interface PaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
    hover?: string;
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
  }
}

const finalOption = {
  typography: {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif;',
  palette: {
    primary: {
      light: '#DCEEE9',
      main: '#00BA88',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#E7EBFF',
      main: '#315AE7',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    tertiary: {
      light: '#D6D8E7',
      main: '#6E7191',
      dark: '#cbcbcb',
    },
  },
};

const theme = createTheme(finalOption);

export default theme;

export enum Breakpoints {
  xs = '321px',
  sm = '576px',
  md = '768px',
  lg = '992px',
  xl = '1200px',
}
