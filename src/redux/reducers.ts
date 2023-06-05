import {combineReducers} from 'redux';
import ThemeReducer from './ducks/theme_slice';
import UserReducer from './ducks/users_slice';

export const rootReducer = combineReducers({
  theme: ThemeReducer,
  users: UserReducer,
});
