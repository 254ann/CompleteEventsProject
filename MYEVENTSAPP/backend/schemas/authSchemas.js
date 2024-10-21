const { body, validationResult } = require("express-validator");

const Register = [
    body("username").isString().withMessage("Username must be a string"),
    body("email").isEmail().withMessage("Email must be valid"),
    body("isAdmin").isBoolean().withMessage("isAdmin must be set"),
    body("password").isString().withMessage("Password must be a string"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

const Login = [
    body("username").isString().withMessage("Username must be a string"),
    body("password").isString().withMessage("Password must be a string"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

module.exports = { Register, Login };
