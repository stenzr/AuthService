const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load validation scripts
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route: POST /api/users/register
// @desc : Register a new user
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    //check valid input
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists, try login" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password

            });

            //hash password before saving
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;

                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.status(200).json({ msg: "Succesfully Registered" }))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// @route: POST /api/users/login
// @desc : Login the user 
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    //check valid input
    if (!isValid) {
        return res.status(400).json(errors);
    }

    //get email from request
    const email = req.body.email;
    const password = req.body.password;

    //Check if user exists or not
    User.findOne({ email: email }).then(user => {
        if (!user) {
            return res.status(400).json({ email: "Email not found" });
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };

                //Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 //expiration time in seconds
                    },
                    (err, token) => {
                        res.status(200).json({
                            success: true,
                            msg: "User successfully logged in",
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });



    });

});


module.exports = router;

