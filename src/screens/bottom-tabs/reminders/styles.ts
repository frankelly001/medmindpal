import {StyleSheet} from 'react-native';
import {screenHeight, wp} from '../../../config/const';
import colors from '../../../constants/colors';

export const remindersStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey_light_2,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 8,
  },
  contentContainer1: {paddingHorizontal: 20, flex: 1},
  contentContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  seperator: {
    width: 3,
    height: 3,
    backgroundColor: colors.grey_dark,
    marginHorizontal: 5,
  },
});
