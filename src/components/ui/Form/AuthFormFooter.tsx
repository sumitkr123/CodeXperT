import {Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Theme} from '../../../models/themeTypes';
import {FormComponentStyle} from './FormComponents.style';

type AuthFormFooterProps = {
  theme: Theme;
  onPrimaryButtonPress: () => void;
  onSecondaryLinkPress: () => void;
  primaryButtonText: string;
  secondaryLinkFirstText: string;
  secondaryLinkSecondText: string;
};

export const AuthFormFooter = ({
  theme,
  onPrimaryButtonPress,
  onSecondaryLinkPress,
  primaryButtonText,
  secondaryLinkFirstText,
  secondaryLinkSecondText,
}: AuthFormFooterProps) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.78}
        style={FormComponentStyle(theme).formPrimaryButton}
        onPress={onPrimaryButtonPress}>
        <Text style={FormComponentStyle(theme).formPrimaryButtonText}>
          {primaryButtonText.toUpperCase()}
        </Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={onSecondaryLinkPress}>
        <Text style={FormComponentStyle(theme).secondaryLinkFirstText}>
          {secondaryLinkFirstText}{' '}
          <Text style={FormComponentStyle(theme).secondaryLinkSecondText}>
            {secondaryLinkSecondText}
          </Text>
        </Text>
      </TouchableWithoutFeedback>
    </>
  );
};
