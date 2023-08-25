import {ViewStyle} from 'react-native';

export type FoodPillTimePickerProps = {
  placeholder?: string;
  style?: ViewStyle;
  onChange?: (date: Date) => void;
  onDelete?: () => void;
  date?: Date;
  align?: 'left' | 'center' | 'right';
};

export type editReminderFields =
  | 'pillName'
  | 'dosage'
  | 'frequency'
  | 'timeOfDay';
