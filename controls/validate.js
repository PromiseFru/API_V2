const { check, validationResult } = require('express-validator');

const userValidationRules = () => {
    return [
      check('content-type').equals('application/json')
        .withMessage('JSON file only please!'),
    ]
  }
  
  const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
  }
  
  module.exports = {
    userValidationRules,
    validate,
  }