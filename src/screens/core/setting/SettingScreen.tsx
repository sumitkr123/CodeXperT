import {SafeAreaView, Text, View} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';
import {CommonStyle} from '../../../assets/commonStyle';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export const SettingScreen = ({
  route,
  navigation,
}: CompositeScreenProps<
  MaterialBottomTabScreenProps<RootBottomNavParamList>,
  NativeStackScreenProps<RootStackParamList>
>) => {
  const theme = useAppSelector(state => state.theme);

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <View style={CommonStyle(theme).commonHeaderBar}>
        <View style={CommonStyle(theme).commonHeaderBarContent}>
          <Icons
            name="chevron-left"
            color={theme.backIconColor}
            style={CommonStyle(theme).commonBackIconStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={CommonStyle(theme).commonHeaderText}>Setting</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
