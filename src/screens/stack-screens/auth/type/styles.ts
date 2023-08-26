import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

export const authTypeStyle = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  svgBg: {
    backgroundColor: colors.white,
    position: 'absolute',
    top: -80,
  },
  text: {marginTop: 50},
  summaryText: {marginVertical: 20},
  contentContainer: {padding: 20, flex: 1, justifyContent: 'flex-end'},
  safeArea: {flex: 1},
});
