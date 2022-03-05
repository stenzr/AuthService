const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // if the fields are empty convert them to empty string for validator function

    data.email = !isEmpty(data.email) ? data.email : " ";
    data.password = !isEmpty(data.password) ? data.password : " ";


    // check email
    if (Validator.isEmpty(data.email)) {
        errors.name = "E-mail cannot be empty";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    } else if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
        errors.password = "Password must be at least 8 characters";
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };
};
