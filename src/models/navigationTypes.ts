import {User} from './userModel';

export type RootStackParamList = {
  Welcome: undefined;
  Auth: undefined;
  BottomNavBar: undefined;
  Profile: undefined | {isVisitorVisiting?: boolean; authorData?: User};
};

export type RootAuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type RootBottomNavParamList = {
  Home: undefined;
  Create: undefined;
  Settings: undefined;
};
