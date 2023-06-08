import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserInfo = async () => {
  let userData = await AsyncStorage.getItem('auth_token');

  if (userData) {
    return JSON.parse(userData);
  }
};
