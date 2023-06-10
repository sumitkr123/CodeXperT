import {Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonStyle} from '../../assets/styles/commonStyle';
import {Theme} from '../../models/themeTypes';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../models/navigationTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ScreenHeaderProps = {
  theme: Theme;
  navigation?:
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
  leftIcon?: string;
  headerTitleAlign?: 'left' | 'center';
  headerRight?: {
    icon: string;
    onPress: () => void;
  }[];
  leftIconOnPress?: () => void;
};

export const ScreenHeader = ({
  theme,
  navigation,
  headerTitle,
  showBackButton,
  leftIcon,
  headerTitleAlign,
  headerRight,
  leftIconOnPress,
}: ScreenHeaderProps) => {
  return (
    <View style={CommonStyle(theme).commonHeaderBar}>
      <View style={CommonStyle(theme).commonHeaderBarContent}>
        {showBackButton !== false &&
          (headerTitleAlign === 'center' && leftIcon ? (
            <View
              style={CommonStyle(theme).commonBackIconStyle}
              onTouchEnd={() => {
                if (leftIconOnPress) {
                  leftIconOnPress();
                }
                if (navigation) {
                  navigation.goBack();
                }
              }}>
              <Icons
                size={30}
                name={leftIcon}
                color={theme.blackWhiteIconColor}
              />
            </View>
          ) : (
            leftIcon && (
              <Icons
                style={CommonStyle(theme).commonBackIconStyle}
                name={leftIcon}
                color={theme.blackWhiteIconColor}
                onPress={() => {
                  if (leftIconOnPress) {
                    leftIconOnPress();
                  }
                  if (navigation) {
                    navigation.goBack();
                  }
                }}
              />
            )
          ))}

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
        ) : leftIcon ? (
          <Text style={CommonStyle(theme).commonHeaderText}>{headerTitle}</Text>
        ) : (
          <Text style={[CommonStyle(theme).commonHeaderText, {paddingLeft: 0}]}>
            {headerTitle}
          </Text>
        )}

        {headerRight && (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              backgroundColor: 'green',
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
