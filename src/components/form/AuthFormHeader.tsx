import {Dimensions, Text} from 'react-native';
import {Image} from 'react-native';
import {Theme} from '../../models/themeTypes';

type AuthFormHeaderProps = {
  theme: Theme;
  title: string;
  subtitle: string;
};

export const AuthFormHeader = ({
  theme,
  title,
  subtitle,
}: AuthFormHeaderProps) => {
  return (
    <>
      <Image
        source={require('../../assets/images/bird1.png')}
        style={{
          height: Dimensions.get('window').height * 0.23,
          width: Dimensions.get('window').width * 0.42,
        }}
      />
      <Text
        style={{
          color: theme.primary,
          fontWeight: '500',
          fontSize: 25,
        }}>
        {title}
      </Text>

      <Text
        style={{
          color: theme.text,
          fontSize: 25,
          fontWeight: '400',
          marginBottom: '7%',
        }}>
        {subtitle}
      </Text>
    </>
  );
};
