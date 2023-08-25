import {StyleSheet} from 'react-native';
import {hp} from '../../config/const';
import colors from '../../constants/colors';

export const inputStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(65),
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: colors.input,
  },
  textInput: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    fontWeight: '500',
    flex: 1,
  },
  iconPosition: {
    position: 'absolute',
    right: 16,
  },
});
