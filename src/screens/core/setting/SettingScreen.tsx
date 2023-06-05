import React, {useState} from 'react';

import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {CommonStyle} from '../../../assets/styles/commonStyle';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {tAppName} from '../../../utils/text_strings';
import {SettingStyle} from '../../../assets/styles/screens/settingScreenStyle';
import {SettingMenusList} from '../../../utils/constants';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../utils/colors';
import {Switch} from 'react-native';
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

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    dispatch(changeTheme(theme.isDark ? 'light' : 'dark'));
  };

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <View style={CommonStyle(theme).commonHeaderBar}>
        <View style={CommonStyle(theme).commonHeaderBarContent}>
          <Icons
            name="chevron-left"
            color={theme.backIconColor}
            style={CommonStyle(theme).commonBackIconStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={CommonStyle(theme).commonHeaderText}>Setting</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: '30%',
          paddingTop: '1%',
        }}
        canCancelContentTouches
        showsVerticalScrollIndicator={false}>
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            <View
              style={{
                marginVertical: '10%',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/bird1.png')}
                style={{
                  height: Dimensions.get('window').height * 0.31,
                  width: Dimensions.get('window').width * 0.535,
                }}
              />
            </View>

            <View
              style={{
                alignItems: 'center',
                marginVertical: '10%',
              }}>
              <Text style={SettingStyle(theme).logoText}>{tAppName}</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
              }}>
              {SettingMenusList.map(item => {
                return (
                  <View
                    key={item.id}
                    style={{
                      marginVertical: '5%',
                    }}>
                    <Text
                      style={{
                        color: theme.isDark ? theme.success : COLORS.blue,
                      }}>
                      {item.title}
                    </Text>
                    {item.options.map((newItem, index) => {
                      return newItem.title !== 'Change theme' ? (
                        <TouchableOpacity key={index} activeOpacity={0.6}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: '5%',
                            }}>
                            <Icons
                              name={newItem.icon}
                              color={
                                theme.isDark ? COLORS.white : theme.iconColor
                              }
                              size={25}
                            />
                            <Text
                              style={{
                                marginLeft: 15,
                                color: theme.text,
                              }}>
                              {newItem.title}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity key={index} activeOpacity={0.75}>
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
                                name={newItem.icon}
                                color={
                                  theme.isDark ? COLORS.white : theme.iconColor
                                }
                                size={25}
                              />
                              <Text
                                style={{
                                  marginLeft: 15,
                                  color: theme.text,
                                }}>
                                {newItem.title}
                              </Text>
                            </View>

                            <Switch
                              trackColor={{false: '#767577', true: '#81b0ff'}}
                              thumbColor={
                                theme.isDark ? '#f5dd4b' : COLORS.black
                              }
                              ios_backgroundColor="#3e3e3e"
                              onValueChange={toggleSwitch}
                              value={isEnabled}
                            />
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
