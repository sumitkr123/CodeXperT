import {Dimensions, StyleSheet} from 'react-native';
import {Theme} from '../../src/models/themeTypes';

export const CommonStyle = (theme?: Theme) =>
  StyleSheet.create({
    commonContainer: {
      flex: 1,
      backgroundColor: theme?.background,
      width: Dimensions.get('window').width,
    },
    commonHeaderBarAndroid: {
      backgroundColor: theme?.headerBarColor,
      elevation: 10,
      paddingHorizontal: '5%',
    },
    commonHeaderBarIOS: {
      backgroundColor: theme?.headerBarColor,
      paddingHorizontal: '5%',
      shadowColor: 'grey',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.6,
      shadowRadius: 2,
    },
    commonHeaderBarContent: {
      height: Dimensions.get('window').height * 0.07,
      alignItems: 'center',
      flexDirection: 'row',
    },
    commonHeaderText: {
      color: theme?.text,
      fontWeight: 'bold',
      fontSize: 20,
      paddingLeft: '3%',
    },
    commonContentView: {
      paddingHorizontal: '5%',
    },
    commonContent: {},
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
    primaryButton: {
      backgroundColor: theme?.primary,
      marginTop: '7%',
      paddingVertical: '4%',
      borderRadius: 60,
      elevation: 5,
      alignItems: 'center',
    },
    primaryButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
