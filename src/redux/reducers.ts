import {combineReducers} from 'redux';
import ThemeReducer from './ducks/theme_slice';
import UserReducer from './ducks/users_slice';
import PostReducer from './ducks/posts_slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistConfig, createTransform, persistReducer} from 'redux-persist';
import {Theme} from '../models/themeTypes';
import {User} from '../models/userModel';
import {PostType, SinglePostType} from '../models/postModel';

// const SetTransform = createTransform(
//   // transform state on its way to being serialized and persisted.
//   (inboundState: any, key) => {
//     // convert mySet to an Array.
//     return {users: JSON.stringify(inboundState)};
//   },

//   // transform state being rehydrated
//   (outboundState, key) => {
//     // convert mySet back to a Set.
//     return {users: JSON.parse(outboundState.users)};
//   },

//   // define which reducers this transform gets called for.
//   {blacklist: ['_persist']},
// );

const themePersistConfig: PersistConfig<Theme> = {
  key: 'userTheme',
  storage: AsyncStorage,
};

const userPersistConfig: PersistConfig<Array<User>> = {
  key: 'allUsers',
  storage: AsyncStorage,
};

const postPersistConfig: PersistConfig<PostType> = {
  key: 'allPosts',
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  theme: persistReducer(themePersistConfig, ThemeReducer),
  users: persistReducer(userPersistConfig, UserReducer),
  posts: persistReducer(postPersistConfig, PostReducer),
});
