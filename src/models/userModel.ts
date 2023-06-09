export type User = {
  [key: string]: any;
  id: number;
  name: string;
  phone: string;
  email: string;
  pass: string;
};

export type UsersType = {
  allUsers: User[];
};

export type UserData = {
  [key: string]: any;
  id: number;
  name: string;
  phone: string;
  email: string;
  pass: string;
  token: string;
};

export type TypeLoginValidationSchema = {
  [key: string]: any;
  email: string;
  pass: string;
};

export type TypeLogin = {
  [key: string]: {
    name: string;
    label: string;
    type: string;
  };
};

export type TypeRegisterForm = {
  [key: string]: {
    name: string;
    label: string;
    type: string;
    passRules?: JSX.Element | string | JSX.Element[] | string[];
  };
};
