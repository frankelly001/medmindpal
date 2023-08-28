import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authServices} from './authServices';
import {authState, signinPayload, signupPayload} from './type';

const initialState: authState = {
  message: null,
  signinFailed: null,
  signinSucess: null,
  signupFailed: null,
  signupSucess: null,
  signinData: null,
  loading: false,
};

export const signin = createAsyncThunk(
  'auth/signin',
  async (payload: signinPayload, thunkAPI) => {
    try {
      return await authServices.signin(payload);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (payload: signupPayload, thunkAPI) => {
    try {
      return await authServices.signup(payload);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authReset: (state: authState) => {
      state.signinFailed = initialState.signinFailed;
      state.signinSucess = initialState.signinSucess;
      state.signupSucess = initialState.signupSucess;
      state.signupFailed = initialState.signupFailed;
      state.message = initialState.message;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        signup.pending,
        (state: authState, action: PayloadAction<any>) => {
          state.loading = true;
        },
      )
      .addCase(
        signup.fulfilled,
        (state: authState, action: PayloadAction<any>) => {
          state.loading = false;
          state.signupSucess = true;
          state.signupFailed = false;
          state.message = action.payload.message;
        },
      )
      .addCase(
        signup.rejected,
        (state: authState, action: PayloadAction<any>) => {
          state.loading = false;
          state.signupSucess = false;
          state.signupFailed = true;
          state.message = action.payload.message;
        },
      )
      .addCase(
        signin.pending,
        (state: authState, action: PayloadAction<any>) => {
          state.loading = true;
        },
      )
      .addCase(
        signin.fulfilled,
        (state: authState, action: PayloadAction<any>) => {
          state.loading = false;
          state.signinData = action.payload.data;
          state.signinSucess = true;
          state.signinFailed = false;
          state.message = action.payload.message;
        },
      )
      .addCase(
        signin.rejected,
        (state: authState, action: PayloadAction<any>) => {
          state.loading = false;
          state.signinData = null;
          state.signinSucess = false;
          state.signinFailed = true;
          state.message = action.payload.message;
        },
      );
  },
});

export const {authReset} = authSlice.actions;
export const authReducer = authSlice.reducer;
