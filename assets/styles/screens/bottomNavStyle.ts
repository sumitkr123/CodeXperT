import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../src/utils/colors';

export const BottomNavStyle = (
  focused?: boolean,
) =>
  StyleSheet.create({
    barStyle: {
      borderRadius: 60,
      borderWidth: 3,
      borderColor: COLORS.primary,
      borderTopWidth: 3,
      borderTopColor: COLORS.primary,
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').height * 0.08,
      position: 'absolute',
      overflow: 'hidden',
      margin: 20,
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      bottom: 15,
      backgroundColor: COLORS.white,
    },
    addView: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: focused === true ? COLORS.primary : COLORS.white,
      width: 45,
      height: 45,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: COLORS.primary,
    },
  });
