import {Theme} from './themeTypes';

export type LanguageOptionsTypes = {
  [key: string]: string;
};

export type FormInputTypeProps = {
  theme: Theme;
  icon?: string;
  type: string;
  label: string;
  name?: string;
  placeholder?: string;
  onChange: (...event: any[]) => void;
  onBlur: (...event: any[]) => void;
  error?: string;
  value: any;
  options?: {[key: string]: string};
};
