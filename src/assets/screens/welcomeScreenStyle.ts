import {StyleSheet} from 'react-native';
import {Theme} from '../../models/themeTypes';

export const WelcomeStyle = (theme: Theme) =>
  StyleSheet.create({
    welcomeText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: theme.text,
    },
    continueButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primary,
      padding: '5%',
      borderRadius: 60,
      elevation: 5,
      position: 'absolute',
      bottom: '10%',
    },
    continueButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
