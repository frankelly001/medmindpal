import {StyleSheet} from 'react-native';
import {screenHeight, wp} from '../../../config/const';
import colors from '../../../constants/colors';

export const editReminderStyles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 20,
  },
  allFieldContainer: {marginVertical: 10},
  allFieldLabel: {marginBottom: 10, marginHorizontal: 10},
  allField: {margin: 5, flex: 1},
  field2: {flexDirection: 'row'},
  filed3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 10,
  },
  submit: {margin: 5, marginVertical: 30},
});
