import React, {useState} from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {CommonStyle} from '../../../assets/styles/commonStyle';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SettingMenus} from '../../../components/other/settingMenus';
import {changeTheme} from '../../../redux/ducks/theme_slice';

export const SettingScreen = ({
  route,
  navigation,
}: CompositeScreenProps<
  BottomTabScreenProps<RootBottomNavParamList>,
  NativeStackScreenProps<RootStackParamList>
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
      <View style={CommonStyle(theme).commonHeaderBar}>
        <View style={CommonStyle(theme).commonHeaderBarContent}>
          <Icons
            name="chevron-left"
            color={theme.blackWhiteIconColor}
            style={CommonStyle(theme).commonBackIconStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={CommonStyle(theme).commonHeaderText}>Setting</Text>
        </View>
      </View>

      <View style={CommonStyle(theme).commonContentView}>
        <View style={CommonStyle(theme).commonContent}>
          <SettingMenus
            theme={theme}
            isSwitchEnabled={isSwitchEnabled}
            toggleSwitch={toggleSwitch}
            route={route}
            navigation={navigation}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
