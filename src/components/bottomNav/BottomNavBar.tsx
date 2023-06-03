import {HomeScreen} from '../../screens/core/home/HomeScreen';
import {SettingScreen} from '../../screens/core/setting/SettingScreen';
import {CreateScreen} from '../../screens/core/create/CreateScreen';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme} from 'react-native-paper';
import {TouchableOpacity, View} from 'react-native';
import {RootBottomNavParamList} from '../../models/navigationTypes';
import {COLORS} from '../../utils/colors';
import {BottomNavStyle} from '../../assets/screens/bottomNavStyle';
import {useAppSelector} from '../../redux/hooks';

const BottomTabs = createMaterialBottomTabNavigator<RootBottomNavParamList>();

export const BottomNavBar = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transperent';

  const newTheme = useAppSelector(state => state.theme);

  return (
    <BottomTabs.Navigator
      labeled={false}
      initialRouteName="Home"
      activeColor={newTheme.primary}
      barStyle={BottomNavStyle(newTheme).barStyle}>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused}) => {
            return focused === true ? (
              <Icons name="home" color={color} size={25} />
            ) : (
              <Icons name="home-outline" color={color} size={25} />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <TouchableOpacity style={BottomNavStyle(newTheme).addButton}>
                <View style={BottomNavStyle(newTheme, focused, color).addView}>
                  <Icons
                    name="plus"
                    color={focused === true ? COLORS.white : COLORS.black}
                    size={25}
                  />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({color, focused}) => {
            return focused === true ? (
              <Icons name="cog" color={color} size={25} />
            ) : (
              <Icons name="cog-outline" color={color} size={25} />
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};
