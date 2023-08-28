import {StyleSheet} from 'react-native';
import {fontFamily, fontSz, hp} from '../../config/const';
import colors from '../../constants/colors';
export const selectInputStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(65),
    paddingVertical: 8,
    borderRadius: 12,

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
  dropdownContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
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
  noValueText: {
    color: colors.error_1,
    textTransform: 'none',
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  animatedPLaceHolder: {
    paddingHorizontal: 16,
    paddingRight: 30,
    textTransform: 'capitalize',
  },
});
