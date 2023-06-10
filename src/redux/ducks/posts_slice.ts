import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  AddPostPayloadType,
  PostType,
  SinglePostType,
} from '../../models/postModel';

let initialState: PostType = {
  allPosts: {},
};

export const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<AddPostPayloadType>) => {
      const data = action.payload;

      const wholeNewdata: PostType = JSON.parse(JSON.stringify(state));

      const wholeAllPosts: {[key: string]: SinglePostType[]} = JSON.parse(
        JSON.stringify(wholeNewdata.allPosts),
      );

      if (wholeAllPosts[data.currentUser]) {
        let existingData = [...wholeAllPosts[data.currentUser]];
        existingData.push(data.data);

        wholeAllPosts[data.currentUser] = existingData;
      } else {
        let newData1: SinglePostType[] = [];
        newData1.push(data.data);

        wholeAllPosts[data.currentUser] = newData1;
      }

      wholeNewdata.allPosts = JSON.parse(JSON.stringify(wholeAllPosts));

      return wholeNewdata;
    },
    addLikePost: (
      state,
      action: PayloadAction<{payloadData: SinglePostType; authorName: string}>,
    ) => {
      const data = action.payload;

      const wholeNewdata: PostType = JSON.parse(JSON.stringify(state));

      const wholeAllPosts: {[key: string]: SinglePostType[]} = JSON.parse(
        JSON.stringify(wholeNewdata.allPosts),
      );

      let newWholeAllPosts = {...wholeAllPosts};

      for (let key in newWholeAllPosts) {
        if (key === data.authorName) {
          newWholeAllPosts[key] = newWholeAllPosts[key].map(item => {
            if (item.id === data.payloadData.id) {
              return data.payloadData;
            } else {
              return item;
            }
          });
        }
      }

      return {
        ...state,
        allPosts: newWholeAllPosts,
      };
    },
    removeLikePost: (
      state,
      action: PayloadAction<{payloadData: SinglePostType; authorName: string}>,
    ) => {
      const data = action.payload;

      const wholeNewdata: PostType = JSON.parse(JSON.stringify(state));

      const wholeAllPosts: {[key: string]: SinglePostType[]} = JSON.parse(
        JSON.stringify(wholeNewdata.allPosts),
      );

      let newWholeAllPosts = {...wholeAllPosts};

      for (let key in newWholeAllPosts) {
        if (key === data.authorName) {
          newWholeAllPosts[key] = newWholeAllPosts[key].map(item => {
            if (item.id === data.payloadData.id) {
              return data.payloadData;
            } else {
              return item;
            }
          });
        }
      }

      return {
        ...state,
        allPosts: newWholeAllPosts,
      };
    },
  },
});

export const {actions, reducer} = PostsSlice;

export const {addPost, addLikePost, removeLikePost} = actions;

export default reducer;
