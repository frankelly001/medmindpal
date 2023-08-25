import {ViewStyle} from 'react-native';
import {RegisterOptions, ErrorOption} from 'react-hook-form';

export type AppDatePickerProps = {
  placeholder: string;
  style?: ViewStyle;
  onChange?: (date: Date) => void;
  date?: Date;
};
