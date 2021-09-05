// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
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

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: { appState: persistReducer(persistConfig, appReducer) },
  middleware,
});

// const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

const storeItems = {
  store,
  persistor,
};

export default storeItems;
