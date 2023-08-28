import {ViewStyle} from 'react-native';

export type FoodPillTimePickerAlign = 'left' | 'center' | 'right';

export type FoodPillTimePickerProps = {
  placeholder?: string;
  style?: ViewStyle;
  onChange?: (date: Date) => void;
  onDelete?: () => void;
  date?: Date;
  align?: FoodPillTimePickerAlign;
};
