import {createSlice} from '@reduxjs/toolkit';
import {localStorage} from '../../helpers/storage';
import {storeState} from '../storeSliceType';
import {reminder, userState} from './type';

const initialState: userState = {
  user: null,
  reminders: [],
};

export const createReminder =
  (reminder: reminder) => async (dispatch: any, getState: () => storeState) => {
    const {reminders, user} = getState().userReducer;

    const newReminders = [reminder, ...reminders];
    if (user) {
      await localStorage.store(user?.email.toLowerCase(), {
        profile: user,
        reminders: newReminders,
      });
      dispatch(setReminders([reminder, ...reminders]));
    }
  };

export const deleteReminder =
  (reminderId: string) => async (dispatch: any, getState: () => storeState) => {
    const {reminders, user} = getState().userReducer;
    if (user) {
      const newReminders = reminders.filter(el => el.id !== reminderId);
      await localStorage.store(user?.email.toLowerCase(), {
        profile: user,
        reminders: newReminders,
      });
      dispatch(setReminders(newReminders));
    }
  };

export const editReminder =
  (reminderId: string) => async (dispatch: any, getState: () => storeState) => {
    const {reminders, user} = getState().userReducer;
    if (user) {
      const newReminders = reminders.filter(el => el.id !== reminderId);
      await localStorage.store(user?.email.toLowerCase(), {
        profile: user,
        reminders: newReminders,
      });
      dispatch(setReminders(newReminders));
    }
  };

export const userSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    reset: (state: userState) => {
      state = initialState;
    },
    setUser: (state: userState, action) => {
      state.user = action.payload;
    },
    setReminders: (state: userState, action: {payload: reminder[]}) => {
      state.reminders = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {reset, setUser, setReminders} = userSlice.actions;
export const userReducer = userSlice.reducer;
