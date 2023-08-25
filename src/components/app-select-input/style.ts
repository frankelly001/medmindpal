import {StyleSheet} from 'react-native';
import {fontFamily, fontSz, hp} from '../../config/const';
import colors from '../../constants/colors';
export const selectInputStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(65),
    paddingVertical: 8,
    borderRadius: 12,
    // borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: colors.input,
  },
  fontFamily: {
    fontFamily: fontFamily('Poppins', 'Medium'),
  },

  iconPosition: {
    position: 'absolute',
    right: 16,
  },
  dropdown: {
    width: '100%',

    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    color: colors.grey_dark,
    fontFamily: fontFamily('Poppins', 'Medium'),
    fontSize: fontSz(16),
    lineHeight: fontSz(16) * 1.3,
  },
  selectedTextStyle: {
    textTransform: 'capitalize',
    color: colors.black,
    fontFamily: fontFamily('Poppins', 'Medium'),
    fontSize: fontSz(16),
    lineHeight: fontSz(16) * 1.3,
  },
  inputSearchStyle: {
    fontSize: fontSz(11),
    borderRadius: 5,
  },
  iconStyle: {
    display: 'none',
  },
  textItem: {
    flex: 1,
    textTransform: 'capitalize',
    color: colors.black,
    fontFamily: fontFamily('Poppins', 'Medium'),
    fontSize: fontSz(14),
    lineHeight: fontSz(14) * 1.3,
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
