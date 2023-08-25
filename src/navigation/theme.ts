import {DefaultTheme} from '@react-navigation/native';
import colors from '../constants/colors';

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.green,
    background: colors.white,
  },
};
