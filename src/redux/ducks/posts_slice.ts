import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AddPostPayloadType, PostType} from '../../models/postModel';
// import {WritableDraft} from 'immer/dist/internal';

let initialState: PostType = {};

export const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<AddPostPayloadType>) => {
      const data = action.payload;

      const newdata = {...state};

      if (newdata[data.currentUser]) {
        const existingData = Object.values(newdata[data.currentUser]);
        existingData.push(data.data);
        newdata[data.currentUser] = existingData;
      } else {
        newdata[data.currentUser] = [data.data];
      }

      return newdata;
    },
  },
});

export const {actions, reducer} = PostsSlice;

export const {addPost} = actions;

export default reducer;
