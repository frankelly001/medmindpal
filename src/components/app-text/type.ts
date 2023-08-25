import {TextStyle, TextProps} from 'react-native';
import {
  ALIGN_TYPES,
  COLOR_TYPES,
  FONT_FAMILY_TYPES,
  FONT_TYPES,
  TEXT_SIZE_TYPE,
} from '../../config/const';

export type AppTextProps = {
  text?: any | string | {};
  style?: TextStyle;
  color?: COLOR_TYPES;
  align?: ALIGN_TYPES;
  weight?: FONT_TYPES;
  font?: FONT_FAMILY_TYPES;
  size?: TEXT_SIZE_TYPE;
  children?: React.ReactNode;
  readonly?: boolean;
  onPress?: () => void;
  disableClick?: boolean;
  numberOfLines?: number;
  lineHeight?: number;
  capitalize?: boolean;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
} & Omit<TextProps, 'children'>;
