import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const appTimePickerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
    flex: 1,
  },
  button: {
    backgroundColor: colors.input,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 5,
    borderWidth: 2,
  },
  dateContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: -10,
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.secondary_1,
  },
  mt10: {marginTop: 10},
  mr5: {marginRight: 5},
});
