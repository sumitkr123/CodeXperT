import React from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';

import {RootState} from '../../../redux/store';

import {useAppSelector} from '../../../redux/hooks';
import {User} from '../../../models/userModel';
import {LoginValidationSchema} from '../../../validations/schema';
import {
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {CommonStyle} from '../../../assets/styles/commonStyle';
import {FormInput} from '../../../components/form/FormInput';
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
import {LoginStyle} from '../../../assets/styles/screens/loginScreenStyle';
import {usersSelector} from '../../../redux/ducks/users_slice';

export const Login = ({
  route,
  navigation,
}: CompositeScreenProps<
  NativeStackScreenProps<RootAuthStackParamList>,
  NativeStackScreenProps<RootStackParamList>
>): React.JSX.Element => {
  const users = usersSelector(
    useAppSelector<User[]>((state: RootState) => state.users),
  );

  const theme = useAppSelector(state => state.theme);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<User>({
    resolver: yupResolver(LoginValidationSchema(users)),
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
          paddingTop: '1%',
        }}
        canCancelContentTouches
        showsVerticalScrollIndicator={false}>
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            <Image
              source={require('../../../assets/images/bird1.png')}
              style={{
                height: Dimensions.get('window').height * 0.23,
                width: Dimensions.get('window').width * 0.39,
              }}
            />
            <Text
              style={{
                color: theme.primary,
                fontWeight: '500',
                fontSize: 25,
              }}>
              {tLoginTitle}
            </Text>

            <Text
              style={{
                color: theme.text,
                fontSize: 25,
                fontWeight: '400',
                marginBottom: '7%',
              }}>
              {tLoginSubTitle}
            </Text>

            {LoginFormInputs.map(item => {
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
              style={LoginStyle(theme).loginButton}
              onPress={handleSubmit(onSubmit)}>
              <Text style={LoginStyle(theme).loginButtonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Register')}>
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
                  {tDontHaveAc}{' '}
                  <Text
                    style={{
                      color: theme.primary,
                      fontSize: 20,
                      fontWeight: '600',
                      textDecorationLine: 'underline',
                    }}>
                    {tSignup1}
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
