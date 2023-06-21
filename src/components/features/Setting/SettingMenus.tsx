import React from 'react';
import {
  Alert,
  BackHandler,
  Dimensions,
  Platform,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyCustomSwitch} from '../../ui/Switch/Switch';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {tAppName} from '../../../utils/text_strings';
import {Theme} from '../../../models/themeTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image} from 'react-native';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CommonStyle} from '../../../../assets/styles/commonStyle';

type MyCustomSettingProps = {
  theme: Theme;
  toggleSwitch: () => void;
  isSwitchEnabled: boolean;
  route: RouteProp<RootBottomNavParamList, keyof RootBottomNavParamList>;
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<
      RootBottomNavParamList,
      keyof RootBottomNavParamList,
      undefined
    >,
    NativeStackNavigationProp<
      RootStackParamList,
      keyof RootStackParamList,
      undefined
    >
  >;
};

type SettingList = {
  id: number;
  title: string;
  data: {
    icon: string;
    title: string;
    onPress?: () => void;
  }[];
}[];

export const SettingMenus = ({
  theme,
  isSwitchEnabled,
  toggleSwitch,
  navigation,
}: MyCustomSettingProps): React.JSX.Element => {
  const SettingMenusListAndroid: SettingList = [
    {
      id: 1,
      title: 'ACCOUNT',
      data: [
        {
          icon: 'account-circle',
          title: 'My account',
          onPress: () => {
            navigation.navigate('Profile');
          },
        },
      ],
    },
    {
      id: 2,
      title: 'ASK US',
      data: [
        {
          icon: 'comment-text-multiple',
          title: 'FAQs',
          onPress: () => {},
        },
        {
          icon: 'email',
          title: 'Feedback',
          onPress: () => {},
        },
      ],
    },
    {
      id: 3,
      title: 'COMMUNITY',
      data: [
        {
          icon: 'information',
          title: 'Rate us',
          onPress: () => {},
        },
        {
          icon: 'share-variant',
          title: 'Invite a friend',
          onPress: () => {},
        },

        {
          icon: 'eye',
          title: 'Privacy Policy',
          onPress: () => {},
        },
      ],
    },
    {
      id: 4,
      title: 'OTHER SETTINGS',
      data: [
        {
          icon: 'theme-light-dark',
          title: 'Change theme',
        },
        {
          icon: 'logout',
          title: 'Logout',
          onPress: () => {
            Alert.alert(tAppName, 'Are you sure? you want to log-out..!', [
              {
                text: 'YES',
                onPress: async () => {
                  await AsyncStorage.removeItem('auth_token');
                  navigation.replace('Auth');
                },
              },
              {text: 'NO', onPress: () => null},
            ]);
          },
        },
        {
          icon: 'exit-to-app',
          title: 'Exit',
          onPress: () => {
            Alert.alert(tAppName, 'Do you really want to exit the app..?', [
              {
                text: 'YES',
                onPress: () => {
                  BackHandler.exitApp();
                },
              },
              {text: 'NO', onPress: () => null},
            ]);
          },
        },
      ],
    },
  ];

  const SettingMenusListIOS: SettingList = [
    {
      id: 1,
      title: 'ACCOUNT',
      data: [
        {
          icon: 'account-circle',
          title: 'My account',
          onPress: () => {
            navigation.navigate('Profile');
          },
        },
      ],
    },
    {
      id: 2,
      title: 'ASK US',
      data: [
        {
          icon: 'comment-text-multiple',
          title: 'FAQs',
          onPress: () => {},
        },
        {
          icon: 'email',
          title: 'Feedback',
          onPress: () => {},
        },
      ],
    },
    {
      id: 3,
      title: 'COMMUNITY',
      data: [
        {
          icon: 'information',
          title: 'Rate us',
          onPress: () => {},
        },
        {
          icon: 'share-variant',
          title: 'Invite a friend',
          onPress: () => {},
        },

        {
          icon: 'eye',
          title: 'Privacy Policy',
          onPress: () => {},
        },
      ],
    },
    {
      id: 4,
      title: 'OTHER SETTINGS',
      data: [
        {
          icon: 'theme-light-dark',
          title: 'Change theme',
        },
        {
          icon: 'logout',
          title: 'Logout',
          onPress: () => {
            Alert.alert(tAppName, 'Are you sure? you want to log-out..!', [
              {
                text: 'YES',
                onPress: async () => {
                  await AsyncStorage.removeItem('auth_token');
                  navigation.replace('Auth');
                },
              },
              {text: 'NO', onPress: () => null},
            ]);
          },
        },
      ],
    },
  ];

  return (
    <SectionList
      contentContainerStyle={{
        paddingBottom: '30%',
        paddingTop: '1%',
      }}
      canCancelContentTouches={true}
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
      bounces={true}
      bouncesZoom={true}
      alwaysBounceVertical={true}
      ListHeaderComponent={
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            <View
              style={{
                alignSelf: 'center',
                height: Dimensions.get('window').height * 0.4,
                width: Dimensions.get('window').width * 0.6,
              }}>
              <Image
                source={require('../../../../assets/images/bird1.png')}
                style={{
                  flex: 1,
                  width: 'auto',
                  height: 'auto',
                  resizeMode: 'contain',
                }}
              />
            </View>

            <View
              style={{
                alignItems: 'center',
                marginVertical: '4%',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 25,
                  color: theme.text,
                }}>
                {tAppName}
              </Text>
            </View>
          </View>
        </View>
      }
      sections={[
        ...(Platform.OS === 'ios'
          ? SettingMenusListIOS
          : SettingMenusListAndroid),
      ]}
      keyExtractor={(item, index) => item.title + index}
      renderItem={({item, index}) => {
        return item.title !== 'Change theme' ? (
          <View style={CommonStyle(theme).commonContentView}>
            <View style={CommonStyle(theme).commonContent}>
              <TouchableOpacity
                key={index}
                activeOpacity={0.6}
                onPress={item.onPress}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: '5%',
                    alignItems: 'center',
                  }}>
                  <Icons
                    name={item.icon}
                    color={theme.blackWhiteIconColor}
                    size={25}
                  />
                  <Text
                    style={{
                      marginLeft: 15,
                      color: theme.text,
                    }}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={CommonStyle(theme).commonContentView}>
            <View style={CommonStyle(theme).commonContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '5%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icons
                    name={item.icon}
                    color={theme.blackWhiteIconColor}
                    size={25}
                  />
                  <Text
                    style={{
                      marginLeft: 15,
                      color: theme.text,
                    }}>
                    {item.title}
                  </Text>
                </View>

                <MyCustomSwitch
                  theme={theme}
                  toggleSwitch={toggleSwitch}
                  isEnabled={isSwitchEnabled}
                />
              </View>
            </View>
          </View>
        );
      }}
      renderSectionHeader={({section: {id, title}}) => (
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            <View
              key={id}
              style={{
                paddingTop: '10%',
              }}>
              <Text
                style={{
                  color: theme.greenBlueHeading,
                }}>
                {title}
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};
