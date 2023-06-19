import {StyleSheet} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';

export const FormComponentStyle = () => {
  const theme = useAppSelector(state => state.theme);

  return StyleSheet.create({
    mainInputView: {
      marginTop: '3%',
      marginBottom: '3%',
    },
    label: {
      color: theme.text,
      fontWeight: '400',
      fontSize: 18,
      marginBottom: '3%',
    },
    inputView: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme.textInputBorderColor,
      borderWidth: 2,
      borderRadius: 6,
      padding: '1.5%',
      marginBottom: 10,
    },
    inputField: {
      width: '92%',
      color: theme.text,
      paddingLeft: '3.5%',

      padding: 16,
      fontFamily: 'Avenir-Medium',
      fontSize: 16,
    },
  });
};
