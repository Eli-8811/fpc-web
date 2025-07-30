import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginFpcApiMock } from '@services/AuthServiceMock';
import type { LoginPayload } from '@model/LoginPayload';
import type { LoginResponse } from '@model/LoginResponse';
import { login } from './loginSlice';

export const thunkLogin = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string }
>('auth/token', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await loginFpcApiMock(payload);
    dispatch(login(response));
    return response;
  } catch (error: any) {
    const message = error?.message || 'Error inesperado en loginTechHub';
    return rejectWithValue(message);
  }
});
