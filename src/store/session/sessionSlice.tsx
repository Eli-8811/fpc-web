import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CheckSessionResponse } from '@model/CheckSessionResponse';

interface SessionState {
  check: CheckSessionResponse | null;
  logout: boolean;
}

const initialState: SessionState = {
  check: null,
  logout: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    checkSession: (state, action: PayloadAction<CheckSessionResponse>) => {
      state.check = action.payload;
    },
    logout: (state) => {
      state.logout = true;
      state.check = null;
    },
    resetSession: (state) => {
      state.logout = false;
      state.check = null;
    },
  },
});

export const { checkSession, logout, resetSession } = sessionSlice.actions;
export default sessionSlice.reducer;
