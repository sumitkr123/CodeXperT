import React from 'react';

import {Keyboard, SafeAreaView, ScrollView, Text} from 'react-native';
import {CommonStyle} from '../../../assets/styles/commonStyle';
import {useAppSelector} from '../../../redux/hooks';
import {View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export const CreateScreen = ({
  route,
  navigation,
}: CompositeScreenProps<
  BottomTabScreenProps<RootBottomNavParamList>,
  NativeStackScreenProps<RootStackParamList>
>): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme);

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <View style={CommonStyle(theme).commonHeaderBar}>
        <View style={[CommonStyle(theme).commonHeaderBarContent]}>
          <Icons
            name="chevron-left"
            color={theme.backIconColor}
            style={CommonStyle(theme).commonBackIconStyle}
            onPress={() => {
              Keyboard.dismiss();
              navigation.goBack();
            }}
          />

          <Text style={CommonStyle(theme).commonHeaderText}>Create</Text>
        </View>
      </View>

      <ScrollView canCancelContentTouches={true}>
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            {/* {AllFormInputs.map(item => {
              return (
                <FormInput
                  key={item.id}
                  theme={theme}
                  icon={item.icon}
                  type={item.type}
                  label={item.label}
                  name={item.name}
                  placeholder={item.placeholder}
                />
              );
            })} */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
