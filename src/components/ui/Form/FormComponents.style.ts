import {StyleSheet} from 'react-native';
import {Theme} from '../../../models/themeTypes';

export const FormComponentStyle = (theme?: Theme) => {
  return StyleSheet.create({
    mainInputView: {
      marginTop: '3%',
      marginBottom: '3%',
    },
    label: {
      color: theme?.text,
      fontWeight: '400',
      fontSize: 18,
      marginBottom: '3%',
    },
    inputView: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme?.textInputBorderColor,
      borderWidth: 2,
      borderRadius: 6,
      padding: '1.5%',
      marginBottom: 10,
    },
    inputField: {
      width: '92%',
      color: theme?.text,
      paddingLeft: '3.5%',
      padding: 16,
      fontFamily: 'Avenir-Medium',
      fontSize: 16,
    },
    formPrimaryButton: {
      backgroundColor: theme?.primary,
      marginTop: '7%',
      paddingVertical: '4%',
      borderRadius: 60,
      elevation: 5,
      alignItems: 'center',
    },
    formPrimaryButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    secondaryLinkFirstText: {
      color: theme?.text,
      fontSize: 20,
      fontWeight: '500',
      marginTop: '15%',
      alignSelf: 'center',
    },
    secondaryLinkSecondText: {
      color: theme?.primary,
      fontSize: 20,
      fontWeight: '600',
      textDecorationLine: 'underline',
    },
  });
};
