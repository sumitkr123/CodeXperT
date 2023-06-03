import {PassRuleJSX} from '../components/formInputs/PasswordRule';
import {Theme} from '../models/themeTypes';
import {TypeLogin, TypeRegisterForm} from '../models/userModel';
import {COLORS} from './colors';

export const AllFormInputs = [
  {
    id: 1,
    icon: 'book-open-outline',
    type: 'text',
    label: 'Language',
    name: 'language',
    placeholder: 'Enter language name',
  },
  {
    id: 2,
    icon: 'check-circle-outline',
    type: 'text',
    label: 'Title',
    name: 'title',
    placeholder: 'Enter title',
  },
];

export const lightTheme: Theme = {
  isDark: false,
  background: COLORS.lightBackground,
  text: COLORS.lightThemeTextColor,
  primary: COLORS.primary,
  secondary: COLORS.secondary,
  backIconColor: COLORS.black,
  iconColor: COLORS.black,
  headerBarColor: COLORS.white,
  textInputBorderColor: COLORS.black,
};

export const darkTheme: Theme = {
  isDark: true,
  background: COLORS.darkBackground,
  text: COLORS.darkThemeTextColor,
  primary: COLORS.primary,
  secondary: COLORS.secondary,
  backIconColor: COLORS.white,
  iconColor: COLORS.primary,
  headerBarColor: COLORS.primary,
  textInputBorderColor: COLORS.primary,
};

export const paginno = [1, 2, 3, 5, 10, 20, 30, 40];

export const fixedLengthValue = 250;

export const nameRegex = /^[a-zA-Z]{2,3}[a-zA-Z\s]*$/;
export const phoneRegex = /^[6-9]\d{9}$/;
export const mailRegex = /^\w+[@]{1}\w+(\.[a-zA-Z]{2,3})+$/;
export const passwordRegex = /^[A-Z]{1}[a-zA-Z]+[@$.]{1}[a-zA-Z\d]+$/;

export const accountTypes = [
  'Personal Account',
  'Real Living',
  'My Dream Home',
  'Full Circle',
  'Core Realtors',
  'Big Block',
];

export const transactionTypes = ['Home Expense', 'Personal Expense', 'Income'];

export const today = new Date();
export const currentyear = today.getFullYear();
export const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

type typemonthYears = string;

const monthYears: typemonthYears[] = [];

export const supportedImg = ['png', 'jpg', 'jpeg'];

export const mb1 = 1024 * 1024;

export const fileReader = new FileReader();

month.map(month => monthYears.push(`${month} ${currentyear}`));

export default monthYears;

export const fixedimit = 2;

export const fixedShowPageCount = 3;

export const groupby = [
  {tdate: 'Transaction-date'},
  {monthyear: 'Month-year'},
  {ttype: 'Transaction-type'},
  {FromAc: 'From-Ac'},
  {ToAc: 'To-Ac'},
  {amount: 'Amount'},
  {notes: 'Notes'},
];

export const isValidFileType = (fileName: string) => {
  let fileType = fileName.split('.').pop();
  if (typeof fileType === 'string') {
    return fileName && supportedImg.includes(fileType);
  }
};

export async function getFile(file: Blob) {
  fileReader.readAsDataURL(file);

  await new Promise<void>(resolve => (fileReader.onloadend = () => resolve()));

  return fileReader.result;
}

let date = new Date();
const minutes = 60;
const seconds = 60;
const milliseconds = 1000;

date.setTime(date.getTime() + minutes * seconds * milliseconds);

export const cookieExpireTime = date;

export const DynamicRegisterForm: TypeRegisterForm = {
  name: {
    name: 'name',
    label: 'Name',
    type: 'text',
  },
  phone: {
    name: 'phone',
    label: 'Phone',
    type: 'number',
  },
  email: {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
  pass: {
    name: 'pass',
    label: 'Password',
    type: 'password',
    passRules: PassRuleJSX,
  },
};

export const defaultUsers = [
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
    type: 'text',
    label: 'Username',
    name: 'email',
    placeholder: 'Enter your username',
  },
  {
    id: 2,
    icon: 'lock-outline',
    type: 'password',
    label: 'Password',
    name: 'pass',
    placeholder: 'Enter password',
  },
];

export const RegisterFormInputs = [
  {
    id: 1,
    icon: 'account-outline',
    type: 'text',
    label: 'Name',
    name: 'name',
    placeholder: 'Enter your name',
  },
  {
    id: 2,
    icon: 'email-outline',
    type: 'text',
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
  },
  {
    id: 3,
    icon: 'phone-outline',
    type: 'phone',
    label: 'Phone no.',
    name: 'phone',
    placeholder: 'Enter phone no.',
  },
  {
    id: 4,
    icon: 'lock-outline',
    type: 'password',
    label: 'Password',
    name: 'pass',
    placeholder: 'Enter password',
  },
];
