import { checkSchema } from "express-validator";
import { schema } from "../../../constants/schema.js";
const CommentSchema = checkSchema({
  content: {
    notEmpty: { errorMessage: schema.required },
  },
  userId: {
    notEmpty: { errorMessage: schema.required },
  },
  postId: {
    notEmpty: { errorMessage: schema.required },
  },
});
export { CommentSchema };
