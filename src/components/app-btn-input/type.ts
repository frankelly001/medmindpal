import {ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {TEXT_SIZE_TYPE} from '../../config/const';

export type BtnInputType = {
  LabelIcon?: React.FC<SvgProps>;
  RightSuffixIcon?: React.FC<SvgProps>;
  label?: string;
  labelFontSize?: TEXT_SIZE_TYPE;
  value?: string | number;
  valueFontSize?: TEXT_SIZE_TYPE;
  onPress?: () => void;
  style?: ViewStyle;
};
