import React from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type CustomStatusBarProps = {
  [key: string]: any;
  backgroundColor: string;
};

export const CustomStatusBar = ({
  backgroundColor,
  ...props
}: CustomStatusBarProps): React.JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor,
        height: insets.top,
      }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};
