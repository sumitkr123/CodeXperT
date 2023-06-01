import {Button, Pressable, Text, View} from 'react-native';

import {CommonStyle} from '../../../assets/commonStyle';
import {HomeStyle} from '../../../assets/homeScreenStyle';

import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {changeTheme} from '../../../redux/ducks/theme_slice';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {CompositeScreenProps} from '@react-navigation/native';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';

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
    <View style={CommonStyle(theme).commonContainer}>
      <View>
        <Text>Home Screen</Text>
      </View>
      <Button
        title="Go to Settings"
        onPress={() => navigation.jumpTo('Settings')}
      />
      <Pressable
        style={HomeStyle(theme).themeButton}
        onPress={() =>
          dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'))
        }>
        <Text style={HomeStyle(theme).themeButtonText}>TOGGLE THEME</Text>
      </Pressable>
    </View>
  );
};
