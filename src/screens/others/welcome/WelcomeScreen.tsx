import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';
import {RootStackParamList} from '../../../models/navigationTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WelcomeStyle} from '../../../../assets/styles/screens/welcomeScreenStyle';
import {tWelcomeTitle} from '../../../utils/text_strings';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle} from '../../../../assets/styles/commonStyle';

export const WelcomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const theme = useAppSelector(state => state.theme);

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: '10%',
          paddingTop: '1%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        canCancelContentTouches
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: Dimensions.get('window').height * 0.5,
            width: Dimensions.get('window').width * 0.6,
          }}>
          <Image
            source={require('../../../../assets/images/bird1.png')}
            style={{
              flex: 1,
              width: 'auto',
              height: 'auto',
              resizeMode: 'contain',
              marginVertical: '10%',
            }}
          />
        </View>
        <Text
          style={[
            WelcomeStyle(theme).welcomeText,
            {
              marginVertical: '10%',
            },
          ]}>
          {tWelcomeTitle}
        </Text>
        <TouchableOpacity
          activeOpacity={0.75}
          style={[
            WelcomeStyle(theme).continueButton,
            {
              marginVertical: '10%',
            },
          ]}
          onPress={() => {
            AsyncStorage.getItem('auth_token').then(value =>
              navigation.replace(value === null ? 'Auth' : 'BottomNavBar'),
            );
          }}>
          <Text style={WelcomeStyle(theme).continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
