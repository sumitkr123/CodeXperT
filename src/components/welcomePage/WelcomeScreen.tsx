import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../redux/hooks';
import {CommonStyle} from '../../assets/commonStyle';
import {RootStackParamList} from '../../models/navigationTypes';
import {WelcomeStyle} from '../../assets/screens/welcomeScreenStyle';

export const WelcomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const theme = useAppSelector(state => state.theme);

  return (
    <View style={CommonStyle(theme).commonContainer}>
      <Text style={WelcomeStyle(theme).welcomeText}>
        Welcome to the CodeXperT...!
      </Text>
      <TouchableOpacity
        activeOpacity={0.75}
        style={WelcomeStyle(theme).continueButton}
        onPress={() => {
          // Will use navigation.replace('BottomNavBar')
          navigation.push('BottomNavBar');
        }}>
        <Text style={WelcomeStyle(theme).continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};
