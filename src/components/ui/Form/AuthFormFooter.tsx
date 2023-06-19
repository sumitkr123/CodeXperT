import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Theme} from '../../../models/themeTypes';
import {CommonStyle} from '../../../../assets/styles/commonStyle';

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
        style={CommonStyle(theme).primaryButton}
        onPress={onPrimaryButtonPress}>
        <Text style={CommonStyle(theme).primaryButtonText}>
          {primaryButtonText.toUpperCase()}
        </Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={onSecondaryLinkPress}>
        <Text
          style={{
            color: theme.text,
            fontSize: 20,
            fontWeight: '500',
            marginTop: '15%',
            alignSelf: 'center',
          }}>
          {secondaryLinkFirstText}{' '}
          <Text
            style={{
              color: theme.primary,
              fontSize: 20,
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}>
            {secondaryLinkSecondText}
          </Text>
        </Text>
      </TouchableWithoutFeedback>
    </>
  );
};
