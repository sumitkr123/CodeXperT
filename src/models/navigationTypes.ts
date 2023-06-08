import {SinglePostType} from './postModel';

export type RootStackParamList = {
  Welcome: undefined;
  Auth: undefined;
  BottomNavBar: undefined;
  Profile: undefined;
  SeeCode: {title: string; data: SinglePostType} | undefined;
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
