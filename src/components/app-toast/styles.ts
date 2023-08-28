import {Platform, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

export const appToastViewStyles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    // margin: 10,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  toast: {
    height: '100%',
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  lottieIcon: {
    height: 50,
    width: 50,
  },
  iconFit: {
    marginLeft: Platform.OS === 'android' ? -10 : -5,
    marginTop: Platform.OS === 'android' ? -7 : -5,
    marginRight: 10,
  },
});
