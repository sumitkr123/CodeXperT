import React from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import {RootState} from '../../../redux/store';

import {useAppSelector} from '../../../redux/hooks';
import {User} from '../../../models/userModel';
import {LoginValidationSchema} from '../../../validations/schema';
import {ScrollView, View} from 'react-native';

import {CommonStyle} from '../../../../assets/styles/commonStyle';
import {LoginFormInputs} from '../../../utils/constants';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  RootAuthStackParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CompositeScreenProps} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  tDontHaveAc,
  tLoginSubTitle,
  tLoginTitle,
  tSignup1,
} from '../../../utils/text_strings';
import {AuthFormFooter} from '../../../components/form/AuthFormFooter';
import {AuthFormHeader} from '../../../components/form/AuthFormHeader';
import {FormInputsCreator} from '../../../components/form/FormInputsCreator';

export const Login = ({
  navigation,
}: CompositeScreenProps<
  NativeStackScreenProps<RootAuthStackParamList>,
  NativeStackScreenProps<RootStackParamList>
>): React.JSX.Element => {
  const users = useAppSelector<User[]>(
    (state: RootState) => state.users.allUsers,
  );

  const theme = useAppSelector(state => state.theme);

  const {
    control,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm<User>({
    resolver: yupResolver(LoginValidationSchema(Object.values(users))),
    mode: 'all',
  });

  const onSubmit = async (data: User): Promise<void> => {
    let randomstr = '';
    randomstr +=
      data.email + data.email.split('').reverse().join('') + data.pass;

    let auth_data = users.filter((item: User) => {
      return item.email === data.email && item.pass === data.pass;
    });

    const obj = {...auth_data[0]};
    obj.token = randomstr;

    auth_data = [{...obj}];

    await AsyncStorage.setItem('auth_token', JSON.stringify(auth_data));
    navigation.replace('BottomNavBar');
  };

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: '10%',
          paddingTop: '4%',
        }}
        canCancelContentTouches
        showsVerticalScrollIndicator={false}>
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            <AuthFormHeader
              theme={theme}
              title={tLoginTitle}
              subtitle={tLoginSubTitle}
            />

            <FormInputsCreator
              theme={theme}
              control={control}
              errors={errors}
              FormInputList={LoginFormInputs}
            />

            <AuthFormFooter
              theme={theme}
              onPrimaryButtonPress={handleSubmit(onSubmit)}
              onSecondaryLinkPress={() => {
                reset();
                navigation.navigate('Register');
              }}
              primaryButtonText={'Login'}
              secondaryLinkFirstText={tDontHaveAc}
              secondaryLinkSecondText={tSignup1}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
