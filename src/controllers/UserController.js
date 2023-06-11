const express = require('express');
const router = express.Router();

const { bodyHasEmail, bodyHasPassword, emailIsValid } = require('../middleware/UserMiddleware')

router.post('/signup', 
    // check for email middleware
    bodyHasEmail,

    // check if email is valid middleware
    emailIsValid,

    // check for password middleware
    bodyHasPassword,


    (request, response) => {
        // if we reach the request, response block of route, assume there are no errors
        response.json({message:"Sign up success!"});

    // if (request.body.email && 
    //     request.body.email.includes("@")
    //     &&
    //     request.body.password) {
    //     response.json({message:"Sign up success!"});
    // } else {
    //     response.status(400).json({message:"Sign up failure!"})
    // }
})

module.exports = router;