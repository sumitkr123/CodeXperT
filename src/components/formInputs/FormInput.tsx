import {TextInput, View} from 'react-native';
import {FormComponentStyle} from '../../assets/components/formComponentsStyle';
import {FormInputTypeProps} from '../../models/formInputTypes';
import {Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../utils/colors';

export const FormInput = ({
  theme,
  icon,
  type,
  label,
  placeholder,
}: FormInputTypeProps) => {
  let fieldblock = <></>;

  switch (type) {
    case 'text':
      fieldblock = (
        <View style={FormComponentStyle(theme).mainInputView}>
          <Text style={FormComponentStyle(theme).label}>{label}</Text>
          <View style={FormComponentStyle(theme).inputView}>
            <Icons
              name={icon}
              color={theme.isDark ? theme.primary : COLORS.black}
              size={25}
            />

            <TextInput
              placeholder={placeholder}
              placeholderTextColor={theme.text}
              collapsable={true}
              style={FormComponentStyle(theme).inputField}
            />
          </View>
        </View>
      );
      break;

    default:
      fieldblock = (
        <View style={FormComponentStyle(theme).mainInputView}>
          <Text style={FormComponentStyle(theme).label}>{label}</Text>
          <View style={FormComponentStyle(theme).inputView}>
            <Icons
              name={icon}
              color={theme.isDark ? theme.primary : COLORS.black}
              size={25}
            />

            <TextInput
              placeholder={placeholder}
              placeholderTextColor={theme.text}
              collapsable={true}
              style={FormComponentStyle(theme).inputField}
            />
          </View>
        </View>
      );
      break;
  }

  return fieldblock;
};
