import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import TokensReducer from './tokens/reducer';
import SelectionReducer from './selection/reducer';


const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  tokens: TokensReducer,
  selection:SelectionReducer
});
const store =configureStore({
  reducer: rootReducer,
  middleware:
(getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware).concat(thunkMiddleware),

});
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch