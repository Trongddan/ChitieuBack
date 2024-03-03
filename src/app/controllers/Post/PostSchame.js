import { checkSchema } from 'express-validator';
import { schema } from '../../../constants/schema.js';
const PostSchema = checkSchema({
  title: {
    notEmpty: { errorMessage: schema.required },
  },
  content: {
    notEmpty: { errorMessage: schema.required },
  },
  userId: {
    notEmpty: { errorMessage: schema.required },
  },
  categoryId: {
    notEmpty: { errorMessage: schema.required },
  },
});
export { PostSchema };
