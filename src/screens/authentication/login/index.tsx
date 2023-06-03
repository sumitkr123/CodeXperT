import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, Form, useForm} from 'react-hook-form';

import {RootState} from '../../../redux/store';

import {useAppSelector} from '../../../redux/hooks';
import {User} from '../../../models/userModel';
import {LoginValidationSchema} from '../../../validations/schema';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {CommonStyle} from '../../../assets/commonStyle';
import {FormInput} from '../../../components/formInputs/FormInput';
import {LoginFormInputs} from '../../../utils/constants';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  RootAuthStackParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {Button} from '@react-native-material/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CompositeScreenProps} from '@react-navigation/native';

export const Login = ({
  route,
  navigation,
}: CompositeScreenProps<
  NativeStackScreenProps<RootAuthStackParamList>,
  NativeStackScreenProps<RootStackParamList>
>): React.JSX.Element => {
  const users = useAppSelector<User[]>((state: RootState) => state.users);

  const theme = useAppSelector(state => state.theme);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<User>({
    resolver: yupResolver(LoginValidationSchema(users)),
    mode: 'all',
  });

  const onSubmit = (data: User): void => {
    let randomstr = '';
    randomstr +=
      data.email + data.email.split('').reverse().join('') + data.pass;

    let auth_data = users.filter(
      (item: User) => item.email === data.email && item.pass === data.pass,
    );

    const obj = {...auth_data[0]};
    obj.token = randomstr;

    auth_data = [{...obj}];

    AsyncStorage.setItem('auth_token', JSON.stringify(auth_data)).then(value =>
      navigation.replace('BottomNavBar'),
    );
  };

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <ScrollView canCancelContentTouches>
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            <Text
              style={{
                color: theme.text,
                fontSize: 25,
                fontWeight: 'bold',
                marginBottom: '15%',
              }}>
              Login with your credentials..!
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
                        name={item.name}
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

            <Button
              style={{
                backgroundColor: theme.primary,
                marginTop: '10%',
              }}
              title="Submit"
              onPress={handleSubmit(onSubmit)}
            />

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  color: theme.text,
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: '15%',
                }}>
                Don't have an account yet..!{' '}
                <Text
                  style={{
                    color: theme.primary,
                    fontSize: 20,
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}>
                  Sign-up!
                </Text>
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
