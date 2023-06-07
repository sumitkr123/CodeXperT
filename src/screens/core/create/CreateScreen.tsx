import React from 'react';

import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {CommonStyle} from '../../../assets/styles/commonStyle';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CreateCodePostFormInputs} from '../../../utils/constants';
import {Controller, useForm} from 'react-hook-form';
import {FormInput} from '../../../components/form/FormInput';
import {CreateCodePostValidationSchema} from '../../../validations/schema';
import {yupResolver} from '@hookform/resolvers/yup';
import {CodeForm} from '../../../models/codeType';
import {CreateStyle} from '../../../assets/styles/screens/createScreenStyle';
import {addPost} from '../../../redux/ducks/posts_slice';
import {PostType, SinglePostType} from '../../../models/postModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SeeUserInfo = async () => {
  const currentUserData = await AsyncStorage.getItem('auth_token');
  if (currentUserData) {
    return JSON.parse(currentUserData);
  }
};

export const CreateScreen = ({
  route,
  navigation,
}: CompositeScreenProps<
  BottomTabScreenProps<RootBottomNavParamList>,
  NativeStackScreenProps<RootStackParamList>
>): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CodeForm>({
    resolver: yupResolver(CreateCodePostValidationSchema),
    mode: 'all',
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: CodeForm): Promise<void> => {
    let newData: SinglePostType = {
      id: '',
      language: '',
      title: '',
      code: '',
      createdDate: '',
    };

    let newDate = new Date().toISOString();

    newData.id = newDate + data.title;
    newData.language = data.language;
    newData.title = data.title;
    newData.code = data.code;
    newData.createdDate = newDate;

    const userData = await SeeUserInfo();

    dispatch(
      addPost({data: newData, currentUser: userData[0].email.toString()}),
    );
    navigation.goBack();
  };

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <View style={CommonStyle(theme).commonHeaderBar}>
        <View style={[CommonStyle(theme).commonHeaderBarContent]}>
          <Icons
            name="chevron-left"
            color={theme.blackWhiteIconColor}
            style={CommonStyle(theme).commonBackIconStyle}
            onPress={() => {
              Keyboard.dismiss();
              navigation.goBack();
            }}
          />

          <Text style={CommonStyle(theme).commonHeaderText}>Create</Text>
        </View>
      </View>

      <ScrollView
        canCancelContentTouches={true}
        contentContainerStyle={{
          paddingTop: 50,
        }}>
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            <Text
              style={{
                color: theme.primary,
                fontWeight: '500',
                fontSize: 25,
                marginBottom: 30,
              }}>
              Create a code snippet..!
            </Text>

            {CreateCodePostFormInputs.map(item => {
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
                        options={item.options}
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
              style={CreateStyle(theme).postButton}
              onPress={handleSubmit(onSubmit)}>
              <Text style={CreateStyle(theme).postButtonText}>POST</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
