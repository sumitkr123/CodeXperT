import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {User, UsersType} from '../../models/userModel';
// import {WritableDraft} from 'immer/dist/internal';

let initialState: UsersType = {
  allUsers: [],
};

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

      const newdata: UsersType = JSON.parse(JSON.stringify(state));

      if (
        newdata.allUsers.length !== undefined &&
        newdata.allUsers !== undefined &&
        newdata !== undefined &&
        newdata.allUsers.length >= 1
      ) {
        data['id'] = newdata.allUsers[newdata.allUsers.length - 1].id + 1;

        newdata.allUsers.push(data);

        return newdata;
      } else {
        data['id'] = 1;

        newdata['allUsers'].push(data);

        return newdata;
      }
      // if (
      //   newdata.length !== undefined &&
      //   newdata !== undefined &&
      //   newdata.length >= 1
      // ) {
      //   data['id'] = newdata[newdata.length - 1].id + 1;

      //   newdata.push(data);

      //   return newdata;
      // } else {
      // data['id'] = 1;

      // newdata.push(data);

      // return newdata;
      // }
    },
  },
});

export const {actions, reducer} = userSlice;

export const {addUser} = actions;

export default reducer;
