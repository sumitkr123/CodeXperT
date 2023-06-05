import {ControllerRenderProps, UseFormRegister} from 'react-hook-form';
import {Theme} from './themeTypes';
import {User} from './userModel';

export type FormInputTypeProps = {
  theme: Theme;
  icon: string;
  type: string;
  label: string;
  name?: string;
  placeholder: string;
  register?: ControllerRenderProps<User, string>;
  onChange: (...event: any[]) => void;
  onBlur: (...event: any[]) => void;
  error?: string;
  value: any;
};
