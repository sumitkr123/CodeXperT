import React, {useEffect} from 'react';

import {
  Animated,
  Dimensions,
  Easing,
  Keyboard,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {FormInputTypeProps} from '../../../models/formInputTypes';
import {Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native';
import {useRef, useState} from 'react';
import {FormComponentStyle} from '../../../../assets/styles/components/formComponentsStyle';
import {COLORS} from '../../../utils/colors';

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

  const inputRef = useRef<any>('');

  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      // toValue: focused ? 1 : 0,
      toValue: focused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [focusAnim, focused, value]);

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
          <TextInput
            ref={inputRef}
            editable={false}
            style={{
              width: '92%',
              color: theme.text,
            }}>
            {value ? value : placeholder}
          </TextInput>
          <Icons
            name={!focused ? 'menu-down' : 'menu-up'}
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
          placeholder={focused ? placeholder : ''}
          placeholderTextColor={theme.text}
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          style={FormComponentStyle(theme).inputField}
          onChangeText={value => {
            onChange(value);
            inputRef.current.value = value;
            if (value === '') {
              setFocused(false);
            } else {
              setFocused(true);
            }
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
          placeholder={focused ? placeholder : ''}
          placeholderTextColor={theme.text}
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          style={FormComponentStyle(theme).inputField}
          onChangeText={value => {
            onChange(value);
            inputRef.current.value = value;
            if (value === '') {
              setFocused(false);
            } else {
              setFocused(true);
            }
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
          placeholder={focused ? placeholder : ''}
          placeholderTextColor={theme.text}
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          style={FormComponentStyle(theme).inputField}
          onChangeText={value => {
            onChange(value);
            inputRef.current.value = value;
            if (value === '') {
              setFocused(false);
            } else {
              setFocused(true);
            }
          }}
          value={value}
        />
      );
      break;

    default:
      fieldblock = (
        <TextInput
          ref={inputRef}
          placeholder={focused ? placeholder : ''}
          placeholderTextColor={theme.text}
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          style={FormComponentStyle(theme).inputField}
          onChangeText={value => {
            onChange(value);
            inputRef.current.value = value;
            if (value === '') {
              setFocused(false);
            } else {
              setFocused(true);
            }
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
        <View style={[FormComponentStyle(theme).mainInputView]}>
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
                  : focused
                  ? theme.primary
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
                    : focused
                    ? theme.primary
                    : theme.iconColor
                }
                size={25}
                style={{
                  width: '8%',
                }}
              />
            )}

            {fieldblock}
            {type !== 'select' && (
              <Animated.View
                style={{
                  position: 'absolute',
                  left: 40,
                  paddingHorizontal: 8,
                  backgroundColor: theme.background,

                  top: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [24, -10],
                  }),
                }}>
                <Text
                  style={{
                    fontFamily: 'Avenir-Heavy',
                    fontSize: 16,
                    color: error
                      ? theme.error
                      : focused && inputRef.current.value
                      ? theme.success
                      : focused
                      ? theme.primary
                      : theme.text,
                  }}>
                  {label}
                </Text>
              </Animated.View>
            )}
          </View>
          {error && <Text style={{color: 'red', fontSize: 16}}>{error}</Text>}
        </View>
      </TouchableWithoutFeedback>

      {focused === true && type === 'select' && (
        <Modal
          animationType="fade"
          transparent
          visible={focused}
          presentationStyle="overFullScreen"
          onDismiss={() => setFocused(!focused)}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              alignSelf: 'center',
              position: 'absolute',
              marginVertical: '30%',
              elevation: 5,
              height: Dimensions.get('window').height * 0.6,
              width: Dimensions.get('window').width * 0.8,
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 30,
            }}>
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
                      setFocused(false);
                      onChange('');
                      inputRef.current.value = '';
                    }}>
                    <Text
                      style={{
                        width: '92%',
                        color: COLORS.black,
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
                          setFocused(false);
                          onChange(item);
                          inputRef.current.value = item;
                        }}>
                        <Text
                          style={{
                            width: '92%',
                            color: COLORS.black,
                          }}>
                          {item}
                        </Text>
                      </View>
                    );
                  })}
                </>
              )}
            </View>
          </ScrollView>
        </Modal>
      )}
    </>
  );
};
