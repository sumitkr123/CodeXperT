import React from 'react';
import {
  Alert,
  BackHandler,
  Dimensions,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyCustomSwitch} from './Switch';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {tAppName} from '../../utils/text_strings';
import {Theme} from '../../models/themeTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image} from 'react-native';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../models/navigationTypes';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
    onPress: () => void;
  }[];
}[];

export const SettingMenus = ({
  theme,
  isSwitchEnabled,
  toggleSwitch,
  navigation,
}: MyCustomSettingProps): React.JSX.Element => {
  const SettingMenusList: SettingList = [
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
          onPress: () => {},
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

  return (
    <SectionList
      contentContainerStyle={{
        paddingBottom: '45%',
        paddingTop: '1%',
      }}
      canCancelContentTouches={true}
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
      bounces={true}
      bouncesZoom={true}
      alwaysBounceVertical={true}
      ListHeaderComponent={
        <>
          <View
            style={{
              marginVertical: '10%',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/bird1.png')}
              style={{
                height: Dimensions.get('window').height * 0.31,
                width: Dimensions.get('window').width * 0.565,
              }}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              marginVertical: '10%',
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
        </>
      }
      sections={[...SettingMenusList]}
      keyExtractor={(item, index) => item.title + index}
      renderItem={({item, index}) => {
        return item.title !== 'Change theme' ? (
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
        ) : (
          <TouchableOpacity
            key={index}
            activeOpacity={0.75}
            onPress={item.onPress}>
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
          </TouchableOpacity>
        );
      }}
      renderSectionHeader={({section: {id, title}}) => (
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
      )}
    />
  );
};
