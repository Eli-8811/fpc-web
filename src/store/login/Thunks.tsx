import { createAsyncThunk } from '@reduxjs/toolkit';
import type { LoginPayload } from '@model/LoginPayload';
import type { LoginResponse } from '@model/LoginResponse';
import { AuthService } from '@services/AuthService';
import { login, logout } from '@store/login/Slice';
import { persistor } from '@store/index';

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string }
>(
  'auth/token',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await AuthService.loginDummy(payload);
      const { accessToken } = response;

      dispatch(login({ accessToken: accessToken }));

      return response;
    } catch (error: any) {
      const message = error?.message || 'Error inesperado en login dummy';
      return rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk<void, void>(
  'auth/logout',
  async (_, { dispatch }) => {
    dispatch(logout());
    await persistor.purge();
  }
);