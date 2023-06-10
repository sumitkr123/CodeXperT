import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../models/userModel';

export const getUserInfo = async () => {
  let userData = await AsyncStorage.getItem('auth_token');

  if (userData) {
    return JSON.parse(userData);
  }
};

export const authorData = (author: string, users: User[]) => {
  return Object.values(users).find(users => users.email === author);
};
