import {Switch} from 'react-native';
import {Theme} from '../../models/themeTypes';
import {COLORS} from '../../utils/colors';
import React from 'react';

type MyCustomSwichProps = {
  theme: Theme;
  toggleSwitch: () => void;
  isEnabled: boolean;
};

export const MyCustomSwitch = ({
  theme,
  toggleSwitch,
  isEnabled,
}: MyCustomSwichProps) => {
  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={theme.isDark ? '#f5dd4b' : COLORS.black}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
