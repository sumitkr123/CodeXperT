import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {Theme} from '../../models/themeTypes';

export const BottomNavStyle = (
  theme: Theme,
  focused?: boolean,
  color?: string,
) =>
  StyleSheet.create({
    barStyle: {
      backgroundColor: COLORS.white,
      borderRadius: 60,
      borderColor: theme.primary,
      borderWidth: 3,
      height: Dimensions.get('window').height * 0.08,
      position: 'absolute',
      overflow: 'hidden',
      margin: 20,
      justifyContent: 'center',
    },
    addButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addView: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: focused === true ? color : COLORS.white,
      width: 45,
      height: 45,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: theme.primary,
    },
  });
