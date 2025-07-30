import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import sessionStorage from 'redux-persist/lib/storage/session'; // sessionStorage

import loginReducer from './login/loginSlice';
import sessionReducer from './session/sessionSlice';

const persistConfigLogin = {
  key: 'login',
  storage, // localStorage
};

const persistConfigSession = {
  key: 'session',
  storage: sessionStorage, // sessionStorage
};

const store = configureStore({
  reducer: {
    login: persistReducer(persistConfigLogin, loginReducer),
    session: persistReducer(persistConfigSession, sessionReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
