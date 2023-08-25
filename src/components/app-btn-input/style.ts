import {StyleSheet} from 'react-native';
import {fontFamily, hp} from '../../config/const';
import colors from '../../constants/colors';

export const inputBtnStyles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: hp(65),
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    // borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.input,
  },

  fontFamily: {
    fontFamily: fontFamily('Poppins', 'Medium'),
  },
});
