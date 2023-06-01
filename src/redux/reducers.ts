import {combineReducers} from 'redux';
import ThemeReducer from './ducks/theme_slice';

export const rootReducer = combineReducers({
  theme: ThemeReducer,
});
