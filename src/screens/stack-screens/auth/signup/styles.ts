import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

export const signupStyle = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  svgBg: {position: 'absolute', backgroundColor: colors.white},
  text: {fontWeight: '700', marginTop: 50},
  contentContainer: {padding: 20, flex: 1},
  safeArea: {flex: 1},
});
