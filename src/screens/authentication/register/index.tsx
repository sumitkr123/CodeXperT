import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';

import {RootState} from '../../../redux/store';

import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {User} from '../../../models/userModel';
import {RegistrationValidationSchema} from '../../../validations/schema';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {CommonStyle} from '../../../assets/commonStyle';
import {FormInput} from '../../../components/formInputs/FormInput';
import {RegisterFormInputs} from '../../../utils/constants';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootAuthStackParamList} from '../../../models/navigationTypes';
import {Button} from '@react-native-material/core';
import {addUser} from '../../../redux/ducks/users_slice';

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
    resolver: yupResolver(RegistrationValidationSchema(users)),
    mode: 'all',
  });

  const onSubmit = async (data: User): Promise<void> => {
    dispatch(addUser(data));
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
              Register yourself..!
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
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: theme.text,
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: '15%',
                }}>
                Already have an account..!{' '}
                <Text
                  style={{
                    color: theme.primary,
                    fontSize: 20,
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}>
                  Sign-in!
                </Text>
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
