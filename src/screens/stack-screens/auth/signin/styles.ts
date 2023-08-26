import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

export const signinStyle = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  svgBg: {position: 'absolute', backgroundColor: colors.white},
  text: {fontWeight: '700', marginTop: 50},
  contentContainer: {padding: 20, flex: 1},
  safeArea: {flex: 1},
  mv25: {marginVertical: 25},
  mv10: {marginVertical: 10},
  google: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: colors.primary_1,
  },
});
