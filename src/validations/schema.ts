import * as yup from 'yup';
import {
  mailRegex,
  nameRegex,
  passwordRegex,
  phoneRegex,
} from '../utils/constants';
import {TypeLoginValidationSchema, User} from '../models/userModel';
import {TypeCodeFormValidationSchema} from '../models/codeType';

export const RegistrationValidationSchema = (
  users: User[],
): yup.ObjectSchema<User> => {
  return yup.object().shape({
    id: yup.mixed(),
    name: yup
      .string()
      .trim()
      .required(`**Name can't be empty..!`)
      .matches(nameRegex, {message: `**Please enter valid name..!`}),
    phone: yup
      .string()
      .trim()
      .required(`**Phone no. can't be empty..!`)
      .matches(phoneRegex, {message: `**Please enter valid number..!`}),
    email: yup
      .string()
      .trim()
      .required(`**Email can't be empty..!`)
      .matches(mailRegex, {message: `**Please enter valid email..!`})
      .test({
        name: 'email',
        skipAbsent: true,
        test(value: string, ctx: yup.TestContext<yup.AnyObject>) {
          let flag = 0;

          for (let i in users) {
            if (users[i].email === value) {
              flag = 1;
              break;
            }
          }

          if (flag === 1) {
            return ctx.createError({
              message: `**Email already exists..!`,
            });
          }

          return true;
        },
      }),
    pass: yup
      .string()
      .trim()
      .required(`**Password can't be empty..!`)
      .min(8, `**Please enter password of at-least 8 characters..!`)
      .matches(passwordRegex, `**Please enter valid password..!`),
    // gender: yup.string().trim().required(`**Gender can't be empty..!`),
  });
};

export const LoginValidationSchema = (
  users: User[],
): yup.ObjectSchema<TypeLoginValidationSchema> => {
  return yup.object().shape({
    email: yup
      .string()
      .trim()
      .required(`**Email can't be empty..!`)
      .test({
        name: 'email',
        skipAbsent: true,
        test(value: string, ctx) {
          if (value.trim() === '') {
            return ctx.createError({
              message: `**Email can't be empty..!`,
            });
          } else {
            let flag = 0;

            for (let i in users) {
              if (users[i].email === value) {
                flag = 1;
                break;
              }
            }

            if (flag === 0) {
              return ctx.createError({
                message: `**Email doesn't exist..!`,
              });
            }
          }
          return true;
        },
      }),
    pass: yup
      .string()
      .trim()
      .required(`**Password can't be empty..!`)
      .test({
        name: 'password',
        skipAbsent: true,
        test(value: string, ctx) {
          if (value.trim() === '') {
            return ctx.createError({
              message: `**Password can't be empty..!`,
            });
          } else {
            let flag = 0;

            for (let i in users) {
              if (
                users[i].email === this.parent.email &&
                users[i].pass === value
              ) {
                flag = 1;
                break;
              }
            }

            if (flag === 0) {
              return ctx.createError({
                message: `**Password doesn't match..!`,
              });
            }
          }
          return true;
        },
      }),
  });
};

export const CreateCodePostValidationSchema: yup.ObjectSchema<TypeCodeFormValidationSchema> =
  yup.object().shape({
    language: yup.string().trim().required(`**Language can't be empty..!`),
    title: yup.string().trim().required(`**Title can't be empty..!`),
    code: yup.string().trim().required(`**Code can't be empty..!`),
  });
