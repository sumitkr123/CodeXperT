import {StyleSheet} from 'react-native';
import {Theme} from '../../../models/themeTypes';

export const LoginStyle = (theme: Theme) =>
  StyleSheet.create({
    loginButton: {
      backgroundColor: theme.primary,
      marginTop: '7%',
      paddingVertical: '4%',
      borderRadius: 60,
      elevation: 5,
      alignItems: 'center',
    },
    loginButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
