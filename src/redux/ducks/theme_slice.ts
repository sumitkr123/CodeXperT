import {createSlice} from '@reduxjs/toolkit';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {COLORS} from '../../utils/colors';
import {Theme} from '../../models/themeTypes';

const initialStateTheme: ColorSchemeName = useColorScheme();

const lightTheme: Theme = {
  isDark: false,
  background: COLORS.lightBackground,
  text: COLORS.lightThemeTextColor,
  primary: COLORS.primary,
  secondary: COLORS.secondary,
  iconColor: COLORS.black,
};

const darkTheme: Theme = {
  isDark: true,
  background: COLORS.darkBackground,
  text: COLORS.darkThemeTextColor,
  primary: COLORS.primary,
  secondary: COLORS.secondary,
  iconColor: COLORS.white,
};

const initialState = initialStateTheme === 'dark' ? darkTheme : lightTheme;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const userChoiceTheme = action.payload;

      let newdata = state;

      newdata = userChoiceTheme === 'dark' ? darkTheme : lightTheme;

      return newdata;
    },
  },
});

const {actions, reducer} = themeSlice;

export const {changeTheme} = actions;

export default reducer;
