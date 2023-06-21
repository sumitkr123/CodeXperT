import React, {useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {SettingMenus} from '../../../components/features/Setting/SettingMenus';
import {changeTheme} from '../../../redux/ducks/theme_slice';
import {ScreenHeader} from '../../../components/ui/Header/ScreenHeader';
import {CommonStyle} from '../../../../assets/styles/commonStyle';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SettingScreen = ({
  route,
  navigation,
}: CompositeScreenProps<
  BottomTabScreenProps<RootBottomNavParamList, 'Settings'>,
  NativeStackScreenProps<RootStackParamList, 'BottomNavBar'>
>): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme);

  const dispatch = useAppDispatch();

  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsSwitchEnabled(previousState => !previousState);
    dispatch(changeTheme(theme.isDark ? 'light' : 'dark'));
  };

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <ScreenHeader
        theme={theme}
        navigation={navigation}
        headerTitle={'Setting'}
        leftIcon={'home'}
      />

      <SettingMenus
        theme={theme}
        isSwitchEnabled={isSwitchEnabled}
        toggleSwitch={toggleSwitch}
        route={route}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
