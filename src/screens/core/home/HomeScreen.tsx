import React from 'react';

import {SafeAreaView, Text} from 'react-native';

import {CommonStyle} from '../../../assets/styles/commonStyle';

import {useAppSelector} from '../../../redux/hooks';
import {RootBottomNavParamList} from '../../../models/navigationTypes';
import {HomeStyle} from '../../../assets/styles/screens/homeScreenStyle';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export const HomeScreen = ({
  route,
  navigation,
}: BottomTabScreenProps<RootBottomNavParamList>): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme);

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <Text style={HomeStyle(theme).homeScreenText}>Home Screen</Text>
    </SafeAreaView>
  );
};
