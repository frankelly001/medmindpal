export type timeOfDay = 'night' | 'morning' | 'noon';

export type DailyTabCardProps = {
  dosage?: string;
  frequency?: string;
  pillName?: string;
  timeOfDay?: {id: string; name: timeOfDay; value: Date}[];
  onPress?: () => void;
  onEditPress?: () => void;
  onDeletePress?: () => void;
};
