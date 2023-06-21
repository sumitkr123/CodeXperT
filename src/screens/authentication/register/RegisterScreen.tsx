import React from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import {RootState} from '../../../redux/store';

import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {User} from '../../../models/userModel';
import {RegistrationValidationSchema} from '../../../validations/schema';
import {ScrollView, View} from 'react-native';

import {CommonStyle} from '../../../../assets/styles/commonStyle';
import {RegisterFormInputs} from '../../../utils/constants';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootAuthStackParamList} from '../../../models/navigationTypes';
import {addUser} from '../../../redux/ducks/users_slice';
import {
  tAlreadyHaveAc,
  tLogin1,
  tSignupSubtitle,
  tSignupTitle,
} from '../../../utils/text_strings';

import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AuthFormFooter,
  AuthFormHeader,
  FormInputsCreator,
} from '../../../components';

export const Register = ({
  navigation,
}: NativeStackScreenProps<RootAuthStackParamList>): React.JSX.Element => {
  const users = useAppSelector<User[]>(
    (state: RootState) => state.users.allUsers,
  );

  const dispatch = useAppDispatch();

  const theme = useAppSelector(state => state.theme);

  const {
    control,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm<User>({
    resolver: yupResolver(RegistrationValidationSchema(Object.values(users))),
    mode: 'all',
  });

  const onSubmit = (data: User): void => {
    dispatch(addUser(data));
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: '10%',
          paddingTop: '4%',
        }}
        // canCancelContentTouches={true}
        showsVerticalScrollIndicator={false}>
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            <AuthFormHeader
              theme={theme}
              title={tSignupTitle}
              subtitle={tSignupSubtitle}
            />

            <FormInputsCreator
              theme={theme}
              control={control}
              errors={errors}
              FormInputList={RegisterFormInputs}
            />

            <AuthFormFooter
              theme={theme}
              onPrimaryButtonPress={handleSubmit(onSubmit)}
              onSecondaryLinkPress={() => {
                reset();
                navigation.navigate('Login');
              }}
              primaryButtonText={'Signup'}
              secondaryLinkFirstText={tAlreadyHaveAc}
              secondaryLinkSecondText={tLogin1}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
