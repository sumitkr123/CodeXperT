import {Control, Controller, FieldErrors, FieldValues} from 'react-hook-form';
import {FormInput} from './FormInput';
import {Theme} from '../../../models/themeTypes';
import {LanguageOptionsTypes} from '../../../models/formInputTypes';

type FormInputsCreatorProps = {
  theme: Theme;
  FormInputList: {
    id: number;
    icon?: string;
    type: string;
    label: string;
    name: string;
    placeholder: string;
    options?: LanguageOptionsTypes | any;
  }[];
  control: Control<any, any>;
  errors: FieldErrors<FieldValues>;
};

export const FormInputsCreator = ({
  theme,
  errors,
  control,
  FormInputList,
}: FormInputsCreatorProps) => {
  return (
    <>
      {FormInputList.map(item => {
        return (
          <Controller
            key={item.id}
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <FormInput
                key={item.id}
                theme={theme}
                icon={item.icon}
                type={item.type}
                label={item.label}
                placeholder={item.placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                options={item.options}
                error={errors[item.name]?.message?.toString()}
              />
            )}
            name={item.name}
          />
        );
      })}
    </>
  );
};
