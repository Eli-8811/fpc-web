import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '@store/login/Slice';
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
import storage from 'redux-persist/lib/storage';

const persistConfigLogin = {
  key: 'login',
  storage,
  whitelist: ['accessToken']
};

const persistedReducerLogin = persistReducer(persistConfigLogin, loginReducer);

export const store = configureStore({
  reducer: {
    login: persistedReducerLogin,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;