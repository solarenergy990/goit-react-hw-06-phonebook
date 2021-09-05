import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './app/reducer';

const rootReducer = combineReducers({
  appState: appReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
