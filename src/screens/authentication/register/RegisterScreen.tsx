import React from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';

import {RootState} from '../../../redux/store';

import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {User} from '../../../models/userModel';
import {RegistrationValidationSchema} from '../../../validations/schema';
import {
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {CommonStyle} from '../../../assets/styles/commonStyle';
import {FormInput} from '../../../components/form/FormInput';
import {RegisterFormInputs} from '../../../utils/constants';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootAuthStackParamList} from '../../../models/navigationTypes';
import {addUser} from '../../../redux/ducks/users_slice';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  tAlreadyHaveAc,
  tLogin1,
  tSignupSubtitle,
  tSignupTitle,
} from '../../../utils/text_strings';
import {RegisterStyle} from '../../../assets/styles/screens/registerScreenStyle';

export const Register = ({
  route,
  navigation,
}: NativeStackScreenProps<RootAuthStackParamList>): React.JSX.Element => {
  const users = useAppSelector<User[]>((state: RootState) => state.users);

  const dispatch = useAppDispatch();

  const theme = useAppSelector(state => state.theme);

  const {
    control,
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
        canCancelContentTouches={true}
        showsVerticalScrollIndicator={false}>
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            <Image
              source={require('../../../assets/images/bird1.png')}
              style={{
                height: Dimensions.get('window').height * 0.23,
                width: Dimensions.get('window').width * 0.42,
              }}
            />
            <Text
              style={{
                color: theme.primary,
                fontWeight: '500',
                fontSize: 25,
              }}>
              {tSignupTitle}
            </Text>

            <Text
              style={{
                color: theme.text,
                fontSize: 25,
                fontWeight: '400',
                marginBottom: '7%',
              }}>
              {tSignupSubtitle}
            </Text>

            {RegisterFormInputs.map(item => {
              return (
                <View key={item.id}>
                  <Controller
                    control={control}
                    render={({field: {onBlur, onChange, value}}) => (
                      <FormInput
                        key={item.id}
                        theme={theme}
                        icon={item.icon}
                        type={item.type}
                        label={item.label}
                        placeholder={item.placeholder}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors[item.name]?.message?.toString()}
                      />
                    )}
                    name={item.name}
                  />
                </View>
              );
            })}

            <TouchableOpacity
              activeOpacity={0.78}
              style={RegisterStyle(theme).registerButton}
              onPress={handleSubmit(onSubmit)}>
              <Text style={RegisterStyle(theme).registerButtonText}>
                SIGNUP
              </Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Login')}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: theme.text,
                    fontSize: 20,
                    fontWeight: '500',
                    marginTop: '15%',
                  }}>
                  {tAlreadyHaveAc}{' '}
                  <Text
                    style={{
                      color: theme.primary,
                      fontSize: 20,
                      fontWeight: '600',
                      textDecorationLine: 'underline',
                    }}>
                    {tLogin1}
                  </Text>
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
