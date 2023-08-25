import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export const onboardingStyle = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.secondary_1},
  svgBg: {position: 'absolute', backgroundColor: colors.secondary_1},
  text: {fontWeight: '700', marginTop: 50},
});
