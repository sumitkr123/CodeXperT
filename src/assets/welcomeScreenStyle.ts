import {StyleSheet} from 'react-native';

export const WelcomeStyle = (theme: string | null | undefined) =>
  StyleSheet.create({
    welcomeText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: theme === 'dark' ? 'white' : 'black',
    },
    continueButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
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
