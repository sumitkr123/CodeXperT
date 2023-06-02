import {Dimensions, StyleSheet} from 'react-native';
import {Theme} from '../../models/themeTypes';
import {COLORS} from '../../utils/colors';

export const CreateStyle = (theme: Theme) =>
  StyleSheet.create({
    mainView: {
      alignItems: 'flex-start',
    },
    headerStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height * 0.065,
      flexDirection: 'row',
      backgroundColor: theme.isDark ? theme.primary : COLORS.white,
      alignItems: 'center',
      elevation: 8,
    },
    headerText: {
      color: theme.text,
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: '3%',
    },
    contentStyle: {
      width: Dimensions.get('window').width,
      marginTop: '5%',
      paddingHorizontal: '5%',
    },
  });
