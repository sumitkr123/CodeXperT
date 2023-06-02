import {
  FlatList,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import {CommonStyle} from '../../../assets/commonStyle';
import {useAppSelector} from '../../../redux/hooks';
import {CreateStyle} from '../../../assets/screens/createScreenStyle';
import {View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FormInput} from '../../../components/formInputs/FormInput';

export const CreateScreen = ({
  route,
  navigation,
}: CompositeScreenProps<
  MaterialBottomTabScreenProps<RootBottomNavParamList>,
  NativeStackScreenProps<RootStackParamList>
>) => {
  const theme = useAppSelector(state => state.theme);

  const AllFormInputs = [
    {
      id: 1,
      theme: theme,
      icon: 'book-open',
      type: 'text',
      label: 'Language',
      placeholder: 'Enter language name',
    },
    {
      id: 2,
      theme: theme,
      icon: 'check-circle',
      type: 'text',
      label: 'Title',
      placeholder: 'Enter title',
    },
  ];

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <ScrollView
        contentContainerStyle={CreateStyle(theme).mainView}
        canCancelContentTouches={true}>
        <View style={CreateStyle(theme).headerStyle}>
          <Icons
            name="chevron-left"
            color={theme.iconColor}
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={CreateStyle(theme).headerText}>Create</Text>
        </View>

        <View style={CreateStyle(theme).contentStyle}>
          {AllFormInputs.map(item => {
            return (
              <FormInput
                key={item.id}
                theme={item.theme}
                icon={item.icon}
                type={item.type}
                label={item.label}
                placeholder={item.placeholder}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
