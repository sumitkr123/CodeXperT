import {HomeScreen} from '../../screens/core/home/HomeScreen';
import {SettingScreen} from '../../screens/core/setting/SettingScreen';
import {CreateScreen} from '../../screens/core/create/CreateScreen';

import {useTheme} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions} from 'react-native';
import {RootBottomNavParamList} from '../../models/navigationTypes';

const BottomTabs = createMaterialBottomTabNavigator<RootBottomNavParamList>();

export const BottomNavBar = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transperent';

  return (
    <BottomTabs.Navigator
      labeled={false}
      initialRouteName="Home"
      activeColor="red"
      barStyle={{
        backgroundColor: 'lightgreen',
        borderRadius: 60,
        height: Dimensions.get('window').height * 0.1,
        position: 'absolute',
        margin: 20,
        overflow: 'hidden',
      }}>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused}) => {
            return focused === true ? (
              <MaterialCommunityIcons name="home" color={color} size={25} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={25}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({color, focused}) => {
            return focused === true ? (
              <MaterialCommunityIcons
                name="file-plus"
                color={color}
                size={25}
              />
            ) : (
              <MaterialCommunityIcons
                name="file-plus-outline"
                color={color}
                size={25}
              />
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
              <MaterialCommunityIcons name="cog" color={color} size={25} />
            ) : (
              <MaterialCommunityIcons
                name="cog-outline"
                color={color}
                size={25}
              />
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};
