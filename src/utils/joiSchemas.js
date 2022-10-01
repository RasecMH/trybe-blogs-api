const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().required().min(8).messages({
    'string.min': 'INVALIDDISPLAYNAMELENGTH',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'INVALIDEMAILFIELD',
  }),
  password: Joi.string().required().min(6).messages({
    'string.min': 'INVALIDPASSWORDLENGTH',
  }),
  image: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.required': 'EMPITYFIELDS',
  }),
  password: Joi.string().required().messages({
    'string.required': 'EMPITYFIELDS',
  }),
});

const categoriesSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.required': 'EMPITYNAMEFIELD',
  }),
});

const postSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.required': 'EMPITYFIELDS',
  }),
  content: Joi.string().required().messages({
    'string.required': 'EMPITYFIELDS',
  }),
  categoryIds: Joi.array().required().messages({
    'string.required': 'EMPITYFIELDS',
  }),
});

const postUpdateSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.required': 'EMPITYFIELDS',
  }),
  content: Joi.string().required().messages({
    'string.required': 'EMPITYFIELDS',
  }),
});

module.exports = {
  userSchema,
  loginSchema,
  categoriesSchema,
  postSchema,
  postUpdateSchema,
};
