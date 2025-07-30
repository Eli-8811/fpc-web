import type { RootState } from '@store/index';

export const selectCheckSession = (state: RootState) => state.session.check;
export const selectLogoutStatus = (state: RootState) => state.session.logout;
