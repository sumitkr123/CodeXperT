import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {FormComponentStyle} from '../../assets/components/formComponentsStyle';
import {FormInputTypeProps} from '../../models/formInputTypes';
import {Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native';
import {useState} from 'react';

export const FormInput = ({
  theme,
  icon,
  type,
  label,
  placeholder,
  name,
  error,
  onChange,
  onBlur,
  value,
}: FormInputTypeProps) => {
  const [focused, setFocused] = useState(false);

  let fieldblock = <></>;

  switch (type) {
    case 'phone':
      fieldblock = (
        <View style={FormComponentStyle(theme).mainInputView}>
          <Text style={FormComponentStyle(theme).label}>{label}</Text>
          <View
            style={[
              FormComponentStyle(theme).inputView,
              {
                borderColor: focused
                  ? theme.primary
                  : theme.textInputBorderColor,
              },
            ]}>
            <Icons
              name={icon}
              color={focused ? theme.primary : theme.iconColor}
              size={25}
              style={{
                width: '8%',
              }}
            />

            <TextInput
              keyboardType="phone-pad"
              placeholder={placeholder}
              placeholderTextColor={theme.text}
              collapsable={true}
              onFocus={() => setFocused(true)}
              onEndEditing={() => setFocused(false)}
              style={FormComponentStyle(theme).inputField}
              onChangeText={value => onChange(value)}
              onBlur={value => onBlur(value)}
              value={value}
            />
          </View>
          {error && <Text style={{color: 'red'}}>{error}</Text>}
        </View>
      );
      break;
    case 'password':
      fieldblock = (
        <View style={FormComponentStyle(theme).mainInputView}>
          <Text style={FormComponentStyle(theme).label}>{label}</Text>
          <View
            style={[
              FormComponentStyle(theme).inputView,
              {
                borderColor: focused
                  ? theme.primary
                  : theme.textInputBorderColor,
              },
            ]}>
            <Icons
              name={icon}
              color={focused ? theme.primary : theme.iconColor}
              size={25}
              style={{
                width: '8%',
              }}
            />

            <TextInput
              secureTextEntry={true}
              placeholder={placeholder}
              placeholderTextColor={theme.text}
              collapsable={true}
              onFocus={() => setFocused(true)}
              onEndEditing={() => setFocused(false)}
              style={FormComponentStyle(theme).inputField}
              onChangeText={value => onChange(value)}
              onBlur={value => onBlur(value)}
              value={value}
            />
          </View>
          {error && <Text style={{color: 'red'}}>{error}</Text>}
        </View>
      );
      break;

    default:
      fieldblock = (
        <View style={FormComponentStyle(theme).mainInputView}>
          <Text style={FormComponentStyle(theme).label}>{label}</Text>
          <View
            style={[
              FormComponentStyle(theme).inputView,
              {
                borderColor: focused
                  ? theme.primary
                  : theme.textInputBorderColor,
              },
            ]}>
            <Icons
              name={icon}
              color={focused ? theme.primary : theme.iconColor}
              size={25}
              style={{
                width: '8%',
              }}
            />

            <TextInput
              placeholder={placeholder}
              placeholderTextColor={theme.text}
              collapsable={true}
              onFocus={() => setFocused(true)}
              onEndEditing={() => setFocused(false)}
              style={FormComponentStyle(theme).inputField}
              onChangeText={value => onChange(value)}
              onBlur={value => onBlur(value)}
              value={value}
            />
          </View>
          {error && <Text style={{color: 'red'}}>{error}</Text>}
        </View>
      );
      break;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setFocused(false);
      }}>
      {fieldblock}
    </TouchableWithoutFeedback>
  );
};
