import {combineReducers} from 'redux';
import ThemeReducer from './ducks/theme_slice';
import UserReducer from './ducks/users_slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistConfig, createTransform, persistReducer} from 'redux-persist';
import {Theme} from '../models/themeTypes';
import {User} from '../models/userModel';

const themePersistConfig: PersistConfig<Theme> = {
  key: 'myTheme',
  storage: AsyncStorage,
};

// const SetTransform = createTransform(
//   // transform state on its way to being serialized and persisted.
//   (inboundState: any, key) => {
//     // convert mySet to an Array.
//     return {...inboundState, mySet: [...inboundState]};
//   },

//   // transform state being rehydrated
//   (outboundState, key) => {
//     // convert mySet back to a Set.
//     return {...outboundState, mySet: new Set(outboundState)};
//   },

//   // define which reducers this transform gets called for.
//   {whitelist: ['someReducer']},
// );

const userPersistConfig: PersistConfig<Array<User>> = {
  key: 'allsers',
  storage: AsyncStorage,
  // transforms: [SetTransform],
};

export const rootReducer = combineReducers({
  theme: persistReducer(themePersistConfig, ThemeReducer),
  users: persistReducer(userPersistConfig, UserReducer),
});
