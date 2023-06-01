import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const CommonStyle = (theme: string | null | undefined) =>
  StyleSheet.create({
    commonContainer: {
      flex: 1,
      padding: '5%',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? Colors.dark : Colors.white,
    },
  });
