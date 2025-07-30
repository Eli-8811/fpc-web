import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkFpcApiMock } from '@services/AuthServiceMock';
import type { CheckSessionResponse } from '@model/CheckSessionResponse';
import { checkSession, logout } from '@store/session/sessionSlice';
import { persistor } from '@store/index';

export const thunkCheckSession = createAsyncThunk<
  CheckSessionResponse,
  string,
  { rejectValue: string }
>('auth/checkSession', async (username, { dispatch, rejectWithValue }) => {
  try {
    const response = await checkFpcApiMock(username);
    if (!response.resultado) {
      return rejectWithValue('Sesión inválida o expirada');
    }
    dispatch(checkSession(response));
    return response;
  } catch (error: any) {
    const message = error?.message || 'Error al verificar la sesión';
    return rejectWithValue(message);
  }
});

export const logoutUser = createAsyncThunk<void, void>(
  'auth/logout',
  async (_, { dispatch }) => {
    dispatch(logout());
    await persistor.purge();
  }
);
