import React from 'react';

import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {FormInputTypeProps} from '../../models/formInputTypes';
import {Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native';
import {useRef, useState} from 'react';
import {FormComponentStyle} from '../../assets/styles/components/formComponentsStyle';

export const FormInput = ({
  theme,
  icon,
  type,
  label,
  placeholder,
  error,
  onChange,
  onBlur,
  value,
}: FormInputTypeProps) => {
  const [focused, setFocused] = useState<boolean>(false);

  const inputRef = useRef<any>('');

  let fieldblock = <></>;

  switch (type) {
    case 'phone':
      fieldblock = (
        <TextInput
          ref={inputRef}
          keyboardType="phone-pad"
          placeholder={placeholder}
          placeholderTextColor={theme.text}
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          style={FormComponentStyle(theme).inputField}
          onChangeText={value => {
            onChange(value);
            inputRef.current.value = value;
          }}
          onBlur={value => {
            onBlur(value);
            inputRef.current.value = value;
          }}
          value={value}
        />
      );
      break;
    case 'password':
      fieldblock = (
        <TextInput
          ref={inputRef}
          secureTextEntry={true}
          placeholder={placeholder}
          placeholderTextColor={theme.text}
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          style={FormComponentStyle(theme).inputField}
          onChangeText={value => {
            onChange(value);
            inputRef.current.value = value;
          }}
          onBlur={value => {
            onBlur(value);
            inputRef.current.value = value;
          }}
          value={value}
        />
      );
      break;

    default:
      fieldblock = (
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          placeholderTextColor={theme.text}
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          style={FormComponentStyle(theme).inputField}
          onChangeText={value => {
            onChange(value);
            inputRef.current.value = value;
          }}
          onBlur={value => {
            onBlur(value);
            inputRef.current.value = value;
          }}
          value={value}
        />
      );
      break;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setFocused(false);
      }}>
      <View style={FormComponentStyle(theme).mainInputView}>
        <Text style={FormComponentStyle(theme).label}>
          {label}
          <Text style={{color: 'red'}}> *</Text>
        </Text>
        <View
          style={[
            FormComponentStyle(theme).inputView,
            {
              borderColor: error
                ? theme.error
                : focused && inputRef.current.value
                ? theme.success
                : theme.textInputBorderColor,
            },
          ]}>
          <Icons
            name={icon}
            color={
              error
                ? theme.error
                : focused && inputRef.current.value
                ? theme.success
                : theme.iconColor
            }
            size={25}
            style={{
              width: '8%',
            }}
          />

          {fieldblock}
        </View>
        {error && <Text style={{color: 'red', fontSize: 16}}>{error}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};
