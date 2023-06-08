import {Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {CommonStyle} from '../../assets/styles/commonStyle';
import {Theme} from '../../models/themeTypes';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../models/navigationTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ScreenHeaderProps = {
  theme: Theme;
  navigation:
    | NativeStackNavigationProp<
        RootStackParamList,
        keyof RootStackParamList,
        undefined
      >
    | BottomTabNavigationProp<
        RootBottomNavParamList,
        keyof RootBottomNavParamList,
        undefined
      >;

  headerTitle: string;
  showBackButton?: boolean;
  backIcon: string;
  headerTitleAlign?: 'left' | 'center';
  headerRight?: {
    icon: string;
    onPress: () => void;
  }[];
};

export const ScreenHeader = ({
  theme,
  navigation,
  headerTitle,
  showBackButton,
  backIcon,
  headerTitleAlign,
  headerRight,
}: ScreenHeaderProps) => {
  return (
    <View style={CommonStyle(theme).commonHeaderBar}>
      <View style={CommonStyle(theme).commonHeaderBarContent}>
        {showBackButton !== false && (
          <Icons
            name={backIcon}
            color={theme.blackWhiteIconColor}
            style={CommonStyle(theme).commonBackIconStyle}
            onPress={() => navigation.goBack()}
          />
        )}

        {headerTitleAlign === 'center' ? (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              position: 'absolute',
            }}>
            <Text style={CommonStyle(theme).commonHeaderText}>
              {headerTitle}
            </Text>
          </View>
        ) : (
          <Text style={CommonStyle(theme).commonHeaderText}>{headerTitle}</Text>
        )}

        {headerRight && (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            {headerRight.map((icons, index) => {
              return (
                <Icons
                  key={index}
                  name={icons.icon}
                  color={theme.blackWhiteIconColor}
                  style={CommonStyle(theme).commonBackIconStyle}
                  onPress={() => icons.onPress}
                />
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};
