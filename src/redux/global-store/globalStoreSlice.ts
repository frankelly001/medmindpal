import {createSlice} from '@reduxjs/toolkit';
import {globalStoreSliceState} from './type';

const initialState: globalStoreSliceState = {
  user: {
    name: 'daniel',
  },
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    reset: (state: globalStoreSliceState) => {
      state = initialState;
    },
  },
  extraReducers: builder => {},
});

export const {reset} = storeSlice.actions;
export const globalStoreReducer = storeSlice.reducer;
