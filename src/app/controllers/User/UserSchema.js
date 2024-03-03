import { checkSchema } from 'express-validator';
import { schema } from '../../../constants/schema.js';
export const registerValidator = checkSchema(
  {
    email: {
      notEmpty: { errorMessage: schema.required },
      isEmail: { errorMessage: schema.email },
      trim: true,
      errorMessage: schema.email,
      // custom: {
      //   options: async (value) => {
      //     const isEmailExist = await userService.checkEmailExist(value)
      //     if (isEmailExist) {
      //       throw Error(message.emailExisted)
      //     }
      //     return true
      //   }
      // }
    },
    password: {
      notEmpty: true,
      errorMessage: schema.required,
    },
    name: {
      notEmpty: true,
      errorMessage: schema.required,
    },
  },
  ['body']
);
