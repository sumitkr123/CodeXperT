export type SinglePostType = {
  // [key: string]: any;
  id: string;
  language: string;
  title: string;
  code: string;
  createdDate: string;
};

export type PostType = {
  allPosts: {
    [key: string]: SinglePostType[];
  };
};

export type AddPostPayloadType = {
  data: SinglePostType;
  currentUser: string;
};
