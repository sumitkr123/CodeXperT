import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {User} from '../../models/userModel';
// import {WritableDraft} from 'immer/dist/internal';

let initialState: Array<User> = [];

// transform to array
// export const usersSelector = (userObj: WritableDraft<User>[]) => {
//   return Object.keys(userObj).map((userKey: any) => userObj[userKey]);
// };

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const data = action.payload;

      const newdata = Object.values(state);

      if (
        newdata.length !== undefined &&
        newdata !== undefined &&
        newdata.length >= 1
      ) {
        data['id'] = newdata[newdata.length - 1].id + 1;

        newdata.push(data);

        return newdata;
      } else {
        data['id'] = 1;

        newdata.push(data);

        return newdata;
      }
    },
  },
});

export const {actions, reducer} = userSlice;

export const {addUser} = actions;

export default reducer;
