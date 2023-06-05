import {StyleSheet} from 'react-native';
import {Theme} from '../../../models/themeTypes';

export const HomeStyle = (theme: Theme) =>
  StyleSheet.create({
    homeScreenText: {
      color: theme.text,
      fontWeight: 'bold',
      fontSize: 20,
    },
    themeButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primary,
      padding: '5%',
      borderRadius: 60,
      elevation: 5,
      position: 'absolute',
      bottom: '20%',
    },
    themeButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
