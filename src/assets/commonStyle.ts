import {Dimensions, StyleSheet} from 'react-native';
import {Theme} from '../models/themeTypes';

export const CommonStyle = (theme: Theme) =>
  StyleSheet.create({
    commonContainer: {
      flex: 1,
      // alignItems: 'center',
      backgroundColor: theme.background,
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    },
  });
