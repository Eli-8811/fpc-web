import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { LoginState } from '@model/LoginState';

const initialState: LoginState = {
  accessToken: null,
};

const sliceLogin = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ accessToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.accessToken = null;
    }
  },
});

export const { login, logout } = sliceLogin.actions;

export default sliceLogin.reducer;