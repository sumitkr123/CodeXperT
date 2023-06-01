import {createSlice} from '@reduxjs/toolkit';
import {ColorSchemeName, useColorScheme} from 'react-native';

const initialState: ColorSchemeName = useColorScheme();

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const editedTheme = action.payload;

      let newdata = state;

      newdata = editedTheme;

      return editedTheme;
    },
  },
});

const {actions, reducer} = themeSlice;

export const {changeTheme} = actions;

export default reducer;
