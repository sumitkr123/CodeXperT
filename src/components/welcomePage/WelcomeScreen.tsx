import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, Text, View} from 'react-native';
import {useAppSelector} from '../../redux/hooks';
import {WelcomeStyle} from '../../assets/welcomeScreenStyle';
import {CommonStyle} from '../../assets/commonStyle';
import {RootStackParamList} from '../../models/navigationTypes';

export const WelcomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const theme = useAppSelector(state => state.theme);

  return (
    <View style={CommonStyle(theme).commonContainer}>
      <Text style={WelcomeStyle(theme).welcomeText}>
        Welcome to the CodeXperT...!
      </Text>
      <Pressable
        style={WelcomeStyle(theme).continueButton}
        onPress={() => {
          // Will use navigation.replace('BottomNavBar')
          navigation.push('BottomNavBar');
        }}>
        <Text style={WelcomeStyle(theme).continueButtonText}>Continue</Text>
      </Pressable>
    </View>
  );
};
