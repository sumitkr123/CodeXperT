import {StyleSheet} from 'react-native';

export const HomeStyle = (theme: string | null | undefined) =>
  StyleSheet.create({
    themeButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
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
