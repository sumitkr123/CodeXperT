import React from 'react';
import {View, Pressable} from 'react-native';
import {BottomNavStyle} from '../../../../assets/styles/screens/bottomNavStyle';
import {COLORS} from '../../../utils/colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

export const CustomBottomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={[BottomNavStyle().barStyle]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View
            key={index}
            style={[
              {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Pressable onPress={onPress}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <NavigationIcon route={label} isFocused={isFocused} />
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const NavigationIcon = ({
  route,
  isFocused,
}: {
  route: string;
  isFocused: boolean;
}) => {
  let icon = '';
  switch (route) {
    case 'Home':
      icon = isFocused ? 'home' : 'home-outline';
      break;

    case 'Create':
      icon = 'plus';
      break;

    case 'Settings':
      icon = isFocused ? 'account' : 'account-outline';
      break;
  }

  let fieldBlock =
    route === 'Create' ? (
      <View style={BottomNavStyle(isFocused).addView}>
        <Icons
          name={icon}
          color={isFocused === true ? COLORS.white : COLORS.primary}
          size={25}
        />
      </View>
    ) : (
      <Icons
        name={icon}
        color={isFocused === true ? COLORS.primary : 'grey'}
        size={25}
      />
    );

  return fieldBlock;
};
