import {TextInputProps, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {TEXT_SIZE_TYPE} from '../../config/const';

export type inputType = {
  editable?: boolean;
  placeHolderColor?: string;
  SuffixIcon?: React.FC<SvgProps>;
  iconPressable?: boolean;
  iconOnPress?: () => void;
  placeHolder: string;
  value: string;
  onChangeText?: (text: string) => void;
  contentContainerStyle?: ViewStyle;
  TextInputStyle?: ViewStyle;
  inputFontSize?: TEXT_SIZE_TYPE;
  placeHolderFontSize?: number;
  placeholderTextTransform?: 'lowercase' | 'capitalize' | 'none';
  otherProps?: TextInputProps;
  multiline?: boolean;
  borderColor?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  valSymbol?: string | undefined;
  borderWidth?: number;
} & TextInputProps;
