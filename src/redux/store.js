// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
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
import storage from 'redux-persist/lib/storage';
import appReducer from './app/reducer';

const persistConfig = {
  key: 'appState',
  storage,
  blacklist: ['filter'],
};

// const rootReducer = combineReducers({
//   appState: appReducer,
// });

const store = configureStore({
  reducer: { appState: persistReducer(persistConfig, appReducer) },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

export default { store, persistor };
