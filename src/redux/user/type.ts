export type timeOfDay = 'morning' | 'noon' | 'night';

export type reminder = {
  id: string;
  pillName: string;
  dosage: string;
  timeOfDay: {id: string; name: timeOfDay; value: Date}[];
  repeatFrequency: string;
};

export type userState = {
  user: {
    fullname: string;
    email: string;
    password: string;
  } | null;
  reminders: reminder[];
};
