import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Login} from '../../screens/authentication/login';
import {Register} from '../../screens/authentication/register';
import {
  RootAuthStackParamList,
  RootStackParamList,
} from '../../models/navigationTypes';

const AuthNativeStack = createNativeStackNavigator<RootAuthStackParamList>();

export const Auth = ({
  route,
  navigate,
}: NativeStackScreenProps<RootStackParamList>) => {
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
