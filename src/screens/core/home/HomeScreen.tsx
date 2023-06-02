import {Button, SafeAreaView, Text, TouchableOpacity} from 'react-native';

import {CommonStyle} from '../../../assets/commonStyle';

import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {changeTheme} from '../../../redux/ducks/theme_slice';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {CompositeScreenProps} from '@react-navigation/native';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {HomeStyle} from '../../../assets/screens/homeScreenStyle';

export const HomeScreen = ({
  route,
  navigation,
}: CompositeScreenProps<
  MaterialBottomTabScreenProps<RootBottomNavParamList>,
  NativeStackScreenProps<RootStackParamList>
>) => {
  const theme = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <Text style={HomeStyle(theme).homeScreenText}>Home Screen</Text>

      <Button
        title="Go to Settings"
        onPress={() => navigation.jumpTo('Settings')}
      />

      <TouchableOpacity
        activeOpacity={0.75}
        style={HomeStyle(theme).themeButton}
        onPress={() => dispatch(changeTheme(theme.isDark ? 'light' : 'dark'))}>
        <Text style={HomeStyle(theme).themeButtonText}>TOGGLE THEME</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
