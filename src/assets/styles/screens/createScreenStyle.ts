import {StyleSheet} from 'react-native';
import {Theme} from '../../../models/themeTypes';

export const CreateStyle = (theme: Theme) =>
  StyleSheet.create({
    postButton: {
      backgroundColor: theme.primary,
      marginTop: '7%',
      paddingVertical: '4%',
      borderRadius: 60,
      elevation: 5,
      alignItems: 'center',
    },
    postButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
