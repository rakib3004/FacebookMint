const Joi = require('@hapi/joi');


//Register Validation
const registerValidation = (data) =>{
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
        dob: Joi.date().required()
    });
    return schema.validate(data);
};

//Login Validation
const loginValidation = data =>{
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
