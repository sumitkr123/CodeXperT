import React from 'react';

import {SafeAreaView, Text} from 'react-native';

import {CommonStyle} from '../../../assets/styles/commonStyle';

import {useAppSelector} from '../../../redux/hooks';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {CompositeScreenProps} from '@react-navigation/native';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {HomeStyle} from '../../../assets/styles/screens/homeScreenStyle';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export const HomeScreen = ({
  route,
  navigation,
}: CompositeScreenProps<
  BottomTabScreenProps<RootBottomNavParamList>,
  NativeStackScreenProps<RootStackParamList>
>): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme);

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <Text style={HomeStyle(theme).homeScreenText}>Home Screen</Text>
    </SafeAreaView>
  );
};
