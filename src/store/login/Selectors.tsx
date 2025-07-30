import type { RootState } from '@store/index';

export const selectLogin = (state: RootState) => state.login.accessToken;