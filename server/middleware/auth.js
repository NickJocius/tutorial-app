const { check} = require('express-validator');

exports.userRegisterValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is Required'),
    check('email')
        .isEmail()
        .withMessage('Must be valid email'),
    check('password')
        .isLength({min: 6})
        .withMessage('Password must be atleast 6 characters')
            
]