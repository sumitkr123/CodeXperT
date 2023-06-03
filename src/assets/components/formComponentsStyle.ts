import {StyleSheet} from 'react-native';
import {Theme} from '../../models/themeTypes';
import {Dimensions} from 'react-native';

export const FormComponentStyle = (theme: Theme) =>
  StyleSheet.create({
    mainInputView: {
      marginTop: '3%',
      marginBottom: '3%',
    },
    label: {
      color: theme.text,
      fontWeight: '700',
      fontSize: 18,
      marginBottom: '3%',
    },
    inputView: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme.textInputBorderColor,
      borderWidth: 2,
      borderRadius: 8,
      padding: '1.5%',
    },
    inputField: {
      width: '92%',
      color: theme.text,
      paddingLeft: '3.5%',
    },
  });
