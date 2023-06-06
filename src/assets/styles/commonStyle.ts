import {Dimensions, StyleSheet} from 'react-native';
import {Theme} from '../../models/themeTypes';

export const CommonStyle = (theme: Theme) =>
  StyleSheet.create({
    commonContainer: {
      flex: 1,
      backgroundColor: theme.background,
      width: Dimensions.get('window').width,
    },
    commonHeaderBar: {
      backgroundColor: theme.headerBarColor,
      elevation: 8,
      paddingHorizontal: '5%',
    },
    commonHeaderBarContent: {
      height: Dimensions.get('window').height * 0.07,
      alignItems: 'center',
      flexDirection: 'row',
    },
    commonHeaderText: {
      color: theme.text,
      fontWeight: 'bold',
      fontSize: 20,
      paddingLeft: '3%',
    },
    commonContentView: {
      paddingHorizontal: '5%',
    },
    commonContent: {
      // marginTop: '5%',
    },
    commonBackIconStyle: {
      fontSize: 30,
      marginLeft: -30,
      paddingLeft: 20,
    },
    commonWholeContentInCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
