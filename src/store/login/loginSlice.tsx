import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { LoginResponse } from '@model/LoginResponse';

interface LoginState {
  login: LoginResponse | null;
}

const initialState: LoginState = {
  login: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginResponse>) => {
      state.login = action.payload;
    },
    clearLogin: (state) => {
      state.login = null;
    },
  },
});

export const { login, clearLogin } = loginSlice.actions;
export default loginSlice.reducer;
