import {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {COLOR_TYPES, TEXT_SIZE_TYPE} from '../../config/const';

export type appButtonProps = {
  readonly?: boolean;
  text: string;
  textColor?: COLOR_TYPES;
  buttonColor?: COLOR_TYPES;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  textSize?: TEXT_SIZE_TYPE;
  LeftView?: ReactNode;
} & TouchableOpacityProps;
