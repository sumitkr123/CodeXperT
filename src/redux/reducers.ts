import {combineReducers} from 'redux';
import ThemeReducer from './ducks/theme_slice';
import UserReducer from './ducks/users_slice';
import PostReducer from './ducks/posts_slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistConfig, persistReducer} from 'redux-persist';
import {Theme} from '../models/themeTypes';
import {UsersType} from '../models/userModel';
import {PostType} from '../models/postModel';

const themePersistConfig: PersistConfig<Theme> = {
  key: 'userTheme',
  storage: AsyncStorage,
};

const userPersistConfig: PersistConfig<UsersType> = {
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
