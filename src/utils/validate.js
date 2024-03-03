import express from 'express'
import { body, validationResult } from 'express-validator'
// can be reused by many routes

// sequential processing, stops running validations chain if the previous one fails.
export const validate = (validation) => {
  return async (req, res, next) => {
    await validation.run(req)
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }

    res.status(400).json({ errors: errors.mapped() })
  }
}
