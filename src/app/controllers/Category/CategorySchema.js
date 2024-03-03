import { checkSchema } from 'express-validator';
import { schema } from '../../../constants/schema.js';
import Category from '../../model/Category.js';
const addCateSchema = checkSchema({
  name: {
    notEmpty: schema.required,
    isString: schema.isString,
  },
  des: {
    notEmpty: schema.required,
    isString: schema.isString,
  },
});
export { addCateSchema };
