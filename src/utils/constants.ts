import {LanguageOptionsTypes} from '../models/formInputTypes';
import {Theme} from '../models/themeTypes';
import {User} from '../models/userModel';
import {COLORS} from './colors';
import {
  tEmail,
  tEnterEmail,
  tEnterPass,
  tEnterPhone,
  tEnterUserName,
  tPass,
  tPhone,
  tUserName,
} from './text_strings';

export const nameRegex = /^[a-zA-Z]{2,3}[a-zA-Z\s]*$/;
export const phoneRegex = /^[6-9]\d{9}$/;
export const mailRegex = /^\w+[@]{1}\w+(\.[a-zA-Z]{2,3})+$/;
export const passwordRegex = /^[A-Z]{1}[a-zA-Z]+[@$.]{1}[a-zA-Z\d]+$/;

export const lightTheme: Theme = {
  isDark: false,
  background: COLORS.lightBackground,
  text: COLORS.lightThemeTextColor,
  primary: COLORS.primary,
  secondary: COLORS.secondary,
  blackWhiteIconColor: COLORS.black,
  iconColor: COLORS.black,
  headerBarColor: COLORS.white,
  greenBlueHeading: COLORS.blue,
  textInputBorderColor: COLORS.black,
  success: COLORS.green,
  error: COLORS.red,
};

export const darkTheme: Theme = {
  isDark: true,
  background: COLORS.darkBackground,
  text: COLORS.darkThemeTextColor,
  primary: COLORS.darkPrimary,
  secondary: COLORS.secondary,
  blackWhiteIconColor: COLORS.white,
  greenBlueHeading: COLORS.green,
  iconColor: COLORS.darkPrimary,
  headerBarColor: COLORS.darkPrimary,
  textInputBorderColor: COLORS.darkPrimary,
  success: COLORS.green,
  error: COLORS.red,
};

export const defaultUsers: User[] = [
  {
    id: 1,
    name: 'Sumit Bhardwaj',
    phone: '1234567890',
    email: 'ak@gmail.com',
    pass: 'Ak@123456',
  },
  {
    id: 2,
    name: 'Akash Bhardwaj',
    phone: '1234567891',
    email: 'aks@gmail.com',
    pass: 'Ak@123456',
  },
  {
    id: 3,
    name: 'Amit Bhardwaj',
    phone: '8796451223',
    email: 'amit@gmail.com',
    pass: 'Ak@123456',
  },
  {
    id: 4,
    name: 'Akshal',
    phone: '8796451223',
    email: 'akb85308@gmail.com',
    pass: 'Ak@123456',
  },
  {
    id: 5,
    name: 'Narendra Singh',
    phone: '1234567890',
    email: 'sk@gmail.com',
    pass: 'Ak@123456',
  },
  {
    id: 6,
    name: 'Sam Kumar',
    phone: '8796451222',
    email: 'sam@gmail.com',
    pass: 'Ak@123456',
  },
  {
    id: 7,
    name: 'Samir Kumar',
    phone: '8796451230',
    email: 'samir@gmail.com',
    pass: 'Ak@123456',
  },
];

export const LoginFormInputs = [
  {
    id: 1,
    icon: 'account-outline',
    type: 'email',
    label: tEmail,
    name: 'email',
    placeholder: tEnterEmail,
  },
  {
    id: 2,
    icon: 'lock-outline',
    type: 'password',
    label: tPass,
    name: 'pass',
    placeholder: tEnterPass,
  },
];

export const RegisterFormInputs = [
  {
    id: 1,
    icon: 'account-outline',
    type: 'text',
    label: tUserName,
    name: 'name',
    placeholder: tEnterUserName,
  },
  {
    id: 2,
    icon: 'email-outline',
    type: 'text',
    label: tEmail,
    name: 'email',
    placeholder: tEnterEmail,
  },
  {
    id: 3,
    icon: 'phone-outline',
    type: 'phone',
    label: tPhone,
    name: 'phone',
    placeholder: tEnterPhone,
  },
  {
    id: 4,
    icon: 'lock-outline',
    type: 'password',
    label: tPass,
    name: 'pass',
    placeholder: tEnterPass,
  },
];

export const ProgrammingLanguages: LanguageOptionsTypes = {
  0: 'C',
  1: 'C++',
  2: 'JAVA',
  3: 'HTML',
  4: 'React',
  5: 'React-native',
  6: 'JavaScript',
};

export const CreateCodePostFormInputs = [
  {
    id: 1,
    type: 'select',
    label: 'Language',
    name: 'language',
    placeholder: 'Select language',
    options: ProgrammingLanguages,
  },
  {
    id: 2,
    icon: 'subtitles',
    type: 'text',
    label: 'Title',
    name: 'title',
    placeholder: 'Enter the title',
  },
  {
    id: 3,
    icon: 'laptop',
    type: 'textarea',
    label: 'Your code',
    name: 'code',
    placeholder: '<h1>Hello World..!</h1>',
  },
];
