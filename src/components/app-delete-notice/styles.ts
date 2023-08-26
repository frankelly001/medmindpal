import {StyleSheet} from 'react-native';
import {screenWidth} from '../../config/const';
import colors from '../../constants/colors';

export const appDeleteNoticeStyles = StyleSheet.create({
  container: {
    width: screenWidth * 0.85,
    backgroundColor: colors.grey_light,
    borderRadius: 20,
    padding: 15,
  },
  noticeLabel: {textAlign: 'center', marginBottom: 20},
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '48%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: 'white',
  },
  yesButton: {
    backgroundColor: 'error_2',
  },
  cancelButton: {
    backgroundColor: 'grey_dark',
  },
});
