import {StyleSheet} from 'react-native';
import {Theme} from '../../../src/models/themeTypes';

export const WelcomeStyle = (theme: Theme) =>
  StyleSheet.create({
    welcomeText: {
      fontWeight: 'bold',
      fontSize: 25,
      color: theme.text,
    },
    continueButton: {
      backgroundColor: theme.primary,
      paddingHorizontal: '10%',
      paddingVertical: '7%',
      borderRadius: 60,
      elevation: 5,
    },
    continueButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
