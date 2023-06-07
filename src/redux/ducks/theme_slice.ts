import {createSlice} from '@reduxjs/toolkit';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from '../../utils/constants';

const initialStateTheme: ColorSchemeName = useColorScheme();

let initialState = initialStateTheme === 'dark' ? darkTheme : lightTheme;

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
