import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Login} from '../../screens/authentication/login/LoginScreen';
import {Register} from '../../screens/authentication/register/RegisterScreen';
import {
  RootAuthStackParamList,
  RootStackParamList,
} from '../../models/navigationTypes';

const AuthNativeStack = createNativeStackNavigator<RootAuthStackParamList>();

export const Auth = ({}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <AuthNativeStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        orientation: 'portrait',
        animation: 'none',
      }}>
      <AuthNativeStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthNativeStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </AuthNativeStack.Navigator>
  );
};
