import  { RegisterUserSchema, LoginUserSchema }  from './JoiSchema/validations.js';

const validateRequest = (req, next, schema) => {
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };

  console.log(req.body);
  const { error, value } = schema.validate(req.body, options);

  if (error) return next(error);

  req.body = value;
  next();
}

const validateRegisterUser = (req, _res, next) => {
  validateRequest(req, next, RegisterUserSchema);
};

const validateLoginUser = (req, _res, next) => {
  validateRequest(req, next, LoginUserSchema);
}

export default { validateRegisterUser, validateLoginUser }; 