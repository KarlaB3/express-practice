const express = require('express');
const router = express.Router();

const { bodyHasEmail, bodyHasPassword, emailIsValid } = require('../middleware/UserMiddleware');
const { errorCheck } = require('../middleware/ErrorMiddleware');

router.post('/signup', 
    // check for email middleware
    bodyHasEmail,

    // check if email is valid middleware
    emailIsValid,

    // check for password middleware
    bodyHasPassword,
    // if error exists, respond with error
    errorCheck,
    
    (request, response) => {
        // if we reach the request, response block of route, assume there are no errors
        response.json({message:"Sign up success!"});

});

router.post('/login', bodyHasEmail, bodyHasPassword, emailIsValid, errorCheck, (request, response) => {
    response.json({message:"Login success!"});
});

module.exports = router;