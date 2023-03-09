import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Tokens from './tokens/reducer';


const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  tokens: Tokens,
});
const store =  configureStore({
  reducer: rootReducer,
  middleware:
(getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware).concat(thunkMiddleware),

});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

