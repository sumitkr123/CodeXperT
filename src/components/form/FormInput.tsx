import React from 'react';

import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {FormInputTypeProps} from '../../models/formInputTypes';
import {Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native';
import {useRef, useState} from 'react';
import {FormComponentStyle} from '../../assets/styles/components/formComponentsStyle';
import {COLORS} from '../../utils/colors';

export const FormInput = ({
  theme,
  icon,
  type,
  label,
  placeholder,
  options,
  error,
  onChange,
  onBlur,
  value,
}: FormInputTypeProps) => {
  const [focused, setFocused] = useState<boolean>(false);

  const [selected, setSelected] = useState<string>('');

  const inputRef = useRef<any>('');

  let fieldblock = <></>;

  switch (type) {
    case 'select':
      fieldblock = (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
          }}
          onTouchEnd={() => setFocused(focused === true ? false : true)}>
          <Text
            style={{
              width: '92%',
              color: theme.text,
            }}>
            {selected ? selected : placeholder && placeholder}
          </Text>
          <Icons
            name="menu-down"
            color={
              error
                ? theme.error
                : focused && inputRef.current.value
                ? theme.success
                : theme.iconColor
            }
            size={25}
          />
        </View>
      );
      break;

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

    case 'textarea':
      fieldblock = (
        <TextInput
          ref={inputRef}
          multiline={true}
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
    <>
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
                  : type === 'select' &&
                    focused &&
                    inputRef.current.value !== ''
                  ? theme.success
                  : focused && inputRef.current.value
                  ? theme.success
                  : theme.textInputBorderColor,
              },
              {
                backgroundColor:
                  type === 'select'
                    ? theme.isDark
                      ? COLORS.black
                      : COLORS.grey
                    : '',
              },
            ]}>
            {icon && (
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
            )}

            {fieldblock}
          </View>
          {error && <Text style={{color: 'red', fontSize: 16}}>{error}</Text>}
        </View>
      </TouchableWithoutFeedback>
      {focused === true && type === 'select' && (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          {options && (
            <>
              <View
                style={{
                  flex: 1,
                  paddingLeft: 5,
                  height: 50,
                }}
                onTouchEnd={() => {
                  setSelected('');
                  setFocused(false);
                  onChange('');
                  inputRef.current.value = '';
                }}>
                <Text
                  style={{
                    width: '92%',
                    color: theme.text,
                  }}>
                  {placeholder}
                </Text>
              </View>
              {Object.values(options).map((item, index) => {
                return (
                  <View
                    key={item + index}
                    style={{
                      flex: 1,
                      paddingLeft: 5,
                      height: 50,
                    }}
                    onTouchEnd={() => {
                      setSelected(item);
                      setFocused(false);
                      onChange(item);
                      inputRef.current.value = item;
                    }}>
                    <Text
                      style={{
                        width: '92%',
                        color: theme.text,
                      }}>
                      {item}
                    </Text>
                  </View>
                );
              })}
            </>
          )}
        </View>
      )}
    </>
  );
};
