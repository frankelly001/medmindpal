import {StyleSheet} from 'react-native';
import {screenHeight, wp} from '../../../config/const';
import colors from '../../../constants/colors';

export const remindersStyles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 16},
  delNoticeText: {textAlign: 'center', marginBottom: 5},
  listContainer: {paddingTop: 16, paddingBottom: 100},
  floatBtn: {
    padding: 12,
    backgroundColor: colors.secondary_1,
    position: 'absolute',
    borderRadius: 50,
    bottom: 20,
    right: 20,
  },
});

export const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey_light_2,
    borderRadius: 20,
    marginVertical: 5,
    overflow: 'hidden',
  },
  subContainer1: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer1: {
    paddingRight: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  seperator: {width: 1},
  dosageContainer: {height: '100%'},
  dosageSubContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  btnContainer: {flex: 1, flexDirection: 'row'},
  btn: {
    flex: 1,
    backgroundColor: colors.secondary_1_light,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
