import {ViewStyle} from 'react-native';
import {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';

export type DinputType<T> = {
  editable?: boolean;
  placeHolderColor?: string;
  LeftView?: JSX.Element;
  iconPressable?: boolean;
  iconOnPress?: () => void;
  placeHolder?: string;
  enableSearchInput?: boolean;
  contentContainerStyle?: ViewStyle;
  TextInputStyle?: ViewStyle;
  inputFontSize?: number;
  placeHolderFontSize?: number;
  labelField?: string;
  valueField?: string;
  onChange?: (text: string) => void;
} & DropdownProps<T>;
