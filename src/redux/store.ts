import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // need to add unnecessary action in a list for avoiding
  //       // errors and warning
  //       ignoredActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
  //     },

  //   }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
