import {StyleSheet} from 'react-native';
import {Theme} from '../../../models/themeTypes';

export const RegisterStyle = (theme: Theme) =>
  StyleSheet.create({
    registerButton: {
      backgroundColor: theme.primary,
      marginTop: '7%',
      paddingVertical: '4%',
      borderRadius: 60,
      elevation: 5,
      alignItems: 'center',
    },
    registerButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
