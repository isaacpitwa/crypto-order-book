import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Tokens from './tokens/reducer';


const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  tokens: Tokens,
});
export default configureStore({
  reducer: rootReducer,
  middleware:
(getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware).concat(thunkMiddleware),

});