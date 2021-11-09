import {DefaultTheme} from '@react-navigation/native';

export default Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // BRAND COLORS
    primary: '#140036',
    secondary: '#F8FCE8',

    accent: '#F0750A',
    accent2: '#DBD8FD',

    background: '#ffffff',

    textDark: '#0A0A0B',
    textLight: '#FFFFF2',

    subtle: '#838383',

    // STATUS COLORS
    success: '#02D7A4',
    warning: '#F5C73D',
    error: '#D22D48',
    info: '#00C9FF',
  },
};
